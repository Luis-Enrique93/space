import { BootState } from './boot.state'
import { MainState } from './main.state'

export class States {
  public static bootState: BootState = new BootState()
  public static mainState: MainState = new MainState()
}
