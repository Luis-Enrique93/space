import { inject, Injectable } from '../dependency-injection'
import { CameraManager } from './camera.manager'
import { RendererManager } from './renderer.manager'
import { SceneManager } from './scene.manager'
import { WindowManager } from './window.manager'

@Injectable({ singleton: true })
export class LoopManager {
  private readonly rendererManager: RendererManager = inject(RendererManager)
  private readonly cameraManager: CameraManager = inject(CameraManager)
  private readonly sceneManager: SceneManager = inject(SceneManager)
  private readonly windowManager: WindowManager = inject(WindowManager)

  public async Start(): Promise<void> {
    this.windowManager.onResize()
    this.Render()
  }

  private Render(): void {
    this.rendererManager.renderer.render(this.sceneManager.scene, this.cameraManager.camera)
    requestAnimationFrame(this.Render.bind(this))
  }
}
