import { inject } from '../core/dependency-injection'
import { SceneManager } from '../core/managers/scene.manager'
import { State } from './state'
import { States } from './states'

export class BootState extends State {
  private readonly sceneManager: SceneManager = inject(SceneManager)

  public Enter(): void {
    console.log('BootState Enter')
    // const geometry = new BoxGeometry(1, 1, 1)
    // const material = new MeshBasicMaterial({ color: 0x00ff00 })
    // const cube = new Mesh(geometry, material)
    // this.sceneManager.scene.add(cube)

    State.SetCurrent(States.mainState)
  }

  public Exit(): void {}
}
