import { Color, Scene } from 'three'
import { Injectable } from '../dependency-injection'

@Injectable({ singleton: true })
export class SceneManager {
  public readonly scene: Scene = new Scene()

  constructor() {
    this.scene.background = new Color(0x000000)
  }
}
