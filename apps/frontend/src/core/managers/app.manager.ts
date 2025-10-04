import { State } from '../../states/state'
import { States } from '../../states/states'
import { inject } from '../dependency-injection'
import { LoopManager } from './loop.manager'

export class App {
  private declare static instance: App
  private readonly loopManager: LoopManager = inject(LoopManager)

  private constructor() {
    this.Start()
  }

  public static GetInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }
    return App.instance
  }

  private async Start(): Promise<void> {
    await this.loopManager.Start()
    State.SetCurrent(States.bootState)
  }
}
