import { LinearSRGBColorSpace, PCFSoftShadowMap, ReinhardToneMapping, WebGLRenderer } from 'three'
import { Injectable } from '../dependency-injection'

@Injectable({ singleton: true })
export class RendererManager {
  public readonly renderer: WebGLRenderer = new WebGLRenderer({
    canvas: document.querySelector('canvas') as HTMLCanvasElement,
    antialias: true,
  })

  constructor() {
    console.log('RendererManager constructor')
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.setClearAlpha(1)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    this.renderer.outputColorSpace = LinearSRGBColorSpace
    this.renderer.toneMapping = ReinhardToneMapping
    this.renderer.toneMappingExposure = 1.5
  }
}
