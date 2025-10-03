export abstract class State {
  public static currentState: State | null = null

  public static SetCurrent(newState: State): void {
    if (this.currentState === newState) return
    if (this.currentState) this.currentState.Exit()
    this.currentState = newState
    if (this.currentState) this.currentState.Enter()
  }

  public abstract Exit(): void

  public abstract Enter(): void
}
