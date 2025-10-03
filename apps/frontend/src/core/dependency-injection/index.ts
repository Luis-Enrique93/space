/**
 * Interfaz a usar en el map que contiene las clases que se van a inyectar
 */
interface ProviderConfig<T> {
  singleton: boolean
  instance?: T
}

/**
 * Map que contiene las clases que se van a inyectar
 */
const providerRegistry = new Map<Function, ProviderConfig<any>>()

/**
 * Decorador Injectable marca una clase como proveedor
 * @param options.singleton - por defecto true
 */
export function Injectable(options: { singleton?: boolean } = {}) {
  const isSingleton = options.singleton !== false
  return function (target: Function) {
    providerRegistry.set(target, { singleton: isSingleton })
  }
}

/**
 * inject crea o devuelve la instancia de la clase marcada
 * @param token - la clase a inyectar
 */
export function inject<T>(token: new (...args: any[]) => T): T {
  const provider = providerRegistry.get(token)
  if (!provider) {
    throw new Error(`Clase no registrada como @Injectable: ${token.name}`)
  }

  if (provider.singleton) {
    if (provider.instance === undefined) {
      provider.instance = new token()
    }
    return provider.instance
  }

  return new token()
}
