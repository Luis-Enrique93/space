import { State } from '../../states/state'
import { States } from '../../states/states'
import { inject } from '../dependency-injection'
import { LoopManager } from './loop.manager'

export class AppManager {
  private declare static instance: AppManager
  private readonly loopManager: LoopManager = inject(LoopManager)

  private constructor() {
    this.Start()
  }

  public static getInstance(): AppManager {
    console.log('AppManager getInstance')
    if (!AppManager.instance) {
      AppManager.instance = new AppManager()
    }
    return AppManager.instance
  }

  private async Start(): Promise<void> {
    await this.loopManager.Start()
    State.SetCurrent(States.bootState)
  }
}
