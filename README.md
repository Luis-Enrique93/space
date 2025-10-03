```bash
cd C:\Users\Luis\emprendimiento\pocs\space

pnpm init
pnpm create vite apps/frontend --template react-ts
pnpx @nestjs/cli new backend --package-manager=pnpm --skip-install --directory apps/backend --skip-git
```

# Folder Structure

```bash
/src
  /core                      # Núcleo del motor ligero
    /object
      GameObject.ts          # Contiene/gestiona componentes
      Component.ts           # Clase base: lifecycle (onInit, onEnable, onUpdate, onEvent, onDestroy)
    /events
      EventBus.ts            # Pub/Sub global o por escena
      Events.ts              # Tipos de eventos (OnPlayerSeen, OnLowHealth, etc.)
    /time
      Clock.ts               # deltaTime, timers, coroutines sencillas
      Cooldowns.ts
    /math
      Vec2.ts Vec3.ts AABB.ts Ray.ts
    /scene
      Scene.ts               # Carga/descarga, lista de GameObjects
      SceneGraph.ts
    /services
      ServiceLocator.ts      # opcional, o DI ligera con inyección explícita
      NavService.ts          # pathfinding/navmesh (si lo tienes)
      PhysicsService.ts      # raycasts/overlaps (si aplicara)
      AssetService.ts        # carga GLTF/texturas/audio (cola y caché)
    /interfaces              # Contratos para mantener bajo acoplamiento
      IUpdatable.ts IRenderable.ts ISerializable.ts

  /rendering                 # Render y assets (puede ser Three.js u otro)
    /three
      Renderer.ts            # Orquestación de render loop
      CameraRig.ts
      Lights.ts
      Materials.ts
    /components              # Componentes “visuales”
      GltfComponent.ts       # Tu idea: adjuntar un GLTF al GameObject
      SpriteComponent.ts
      AnimatorComponent.ts   # hooks a eventos de animación

  /physics (opcional)
    /colliders               # BoxCollider, SphereCollider...
    /components
      RigidbodyComponent.ts  # si usas física ligera o integras un motor

  /audio
    AudioService.ts
    /components
      AudioSourceComponent.ts

  /ai                        # Dominio IA (no ECS)
    /perception
      SensorComponent.ts     # visión/oído con throttling; emite eventos
      PerceptionUtils.ts
    /decision
      AIControllerComponent.ts  # estado “Patrulla/Investiga/Combate”
      Utility.ts                # scorers/pesos para decidir intención
      BehaviorTree/             # si eliges BT: nodos, selector, secuencia
      FSM/                      # si eliges FSM: estados/transiciones
    /navigation
      LocomotionComponent.ts    # moverse a destino; emite OnArrived
      Steering.ts               # seek/arrive/avoid (suavizado)
      CoverFinderComponent.ts   # busca y reserva coberturas
    /blackboard
      Blackboard.ts             # memoria local y/o de escuadra
      SquadController.ts        # coordinación (roles, flanqueos)
    /profiles
      EnemyProfiles.ts          # agresivo/cauto/cazador (pesos JSON)

  /gameplay                   # Reglas del juego (tu “dominío de negocio”)
    /components
      HealthComponent.ts
      WeaponComponent.ts       # ráfagas, recarga, munición; emite OnLowAmmo
      InventoryComponent.ts
      InteractableComponent.ts
    /enemies
      EnemyFactory.ts          # ensambla enemigos a partir de perfiles
      EnemyPrefabs.ts
    /player
      PlayerController.ts      # input → locomoción/acciones
      PlayerHUDAdapter.ts      # puente hacia UI
    /spawners
      WaveSpawner.ts
    /rules
      DamageSystem.ts          # (no ECS: es un servicio/regla específica)
      StatusEffects.ts

  /ui                         # Menús/overlays/HUD (independiente del render)
    /views
      MainMenuView.ts
      PauseMenuView.ts
      HUDView.ts               # barras, prompts, minimapa
    /presenters
      HUDPresenter.ts          # observa eventos del juego y actualiza la vista
    /components
      TooltipComponent.ts
    /input
      InputMapper.ts           # mapea teclado/touch/gestos a acciones

  /networking (opcional y desacoplado)
    ApiClient.ts               # REST para perfiles/leaderboards, etc.
    SocketClient.ts            # WebSocket (telemetría/spectator/coop)
    Dtos.ts

  /scenes                     # Composición de niveles
    Level01.ts
    Level02.ts
    Boot.ts

  /assets                     # Manifiestos de assets (rutas), no los binarios
    gltf.manifest.ts
    audio.manifest.ts

  /config
    Tuning.ts                  # constantes globales: LOD, timers, distancias
    Flags.ts                   # toggles de features

  /tools                      # depuración y devtools
    Gizmos.ts                 # dibuja conos de visión, navpaths, coberturas
    DebugOverlay.ts           # muestra intención/utility por NPC
```
