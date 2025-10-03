import { LoadingManager } from 'three'
import { DRACOLoader, type GLTF, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Injectable } from '../dependency-injection'
import type { Dictionary } from '../../types/dictionary'

// separar diferentes clases por grupos de assets?
// usar composición de clases?
@Injectable({ singleton: true })
export class AssetsManager {
  public declare loadingManager: LoadingManager
  public declare dracoLoader: DRACOLoader
  public declare gltfLoader: GLTFLoader
  public gltfs: Dictionary<GLTF> = {}

  public Start(): void {
    // LoadingUI.Start() // Es la barra de carga
    this.SetManagers()
    this.LoadGltf()
    this.OnLoad() // For testing purposes
  }

  private SetManagers(): void {
    this.loadingManager = new LoadingManager()
    this.loadingManager.onProgress = this.OnProgress
    this.loadingManager.onLoad = () => this.OnLoad()
    this.loadingManager.onError = this.OnError

    // AssetsManager.dracoLoader = new DRACOLoader()
    // AssetsManager.dracoLoader.setDecoderPath('https://www..com/draco/v1/decoders/')
    // AssetsManager.dracoLoader.preload()
    // AssetsManager.dracoLoader.setDecoderConfig({ type: 'js' })

    this.gltfLoader = new GLTFLoader(this.loadingManager)
    this.gltfLoader.setDRACOLoader(this.dracoLoader)
    this.gltfLoader.setPath('/gltf/')
  }

  private LoadGltf(): void {
    // AssetsManager.gltfLoader.load(GltfPaths.zekron, (gltf) => AssetsManager.gltfs[GltfPaths.zekron] = gltf)
    // AssetsManager.gltfLoader.load(GltfPaths.mountain, (gltf) => AssetsManager.gltfs[GltfPaths.mountain] = gltf)
    // AssetsManager.gltfLoader.load(GltfPaths.player, (gltf) => AssetsManager.gltfs[GltfPaths.player] = gltf)
    // AssetsManager.gltfLoader.load(GltfPaths.tree, (gltf) => AssetsManager.gltfs[GltfPaths.tree] = gltf)
  }

  private OnProgress(url: string, loaded: number, total: number): void {
    console.log(url)
    // LoadingUI.UpdateProgressBar(loaded, total)
  }

  private OnLoad(): void {
    console.log(this.gltfs)
    console.log('##### LOADED #####')
    // LoadingUI.OnLoad()
  }

  private OnError(url: string): void {
    console.log('error al cargar: ' + url)
  }
}
