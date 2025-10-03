import { inject, Injectable } from '../dependency-injection'
import { CameraManager } from './camera.manager'
import { RendererManager } from './renderer.manager'

@Injectable({ singleton: true })
export class WindowManager {
  public width: number = window.innerWidth
  public height: number = window.innerHeight
  private readonly rendererManager: RendererManager = inject(RendererManager)
  private readonly cameraManager: CameraManager = inject(CameraManager)

  public onResize(): void {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.rendererManager.renderer.setSize(this.width, this.height)
      this.cameraManager.camera.aspect = this.width / this.height
      this.cameraManager.camera.updateProjectionMatrix()
    })
  }
}
