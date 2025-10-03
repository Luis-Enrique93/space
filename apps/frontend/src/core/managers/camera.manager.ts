import { PerspectiveCamera } from 'three'
import { Injectable } from '../dependency-injection'

@Injectable({ singleton: true })
export class CameraManager {
  public readonly camera: PerspectiveCamera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  constructor() {
    this.camera.position.set(0, 0, 10)
    this.camera.lookAt(0, 0, 0)
  }
}
