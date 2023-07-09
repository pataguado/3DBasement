
import { Color, MeshStandardMaterial, CanvasTexture } from 'three'
const canvas = document.createElement('canvas')
canvas.width = 512
canvas.height = 512

const context = canvas.getContext('2d')
const gradient = context.createLinearGradient(0, 0, 0, 512)
gradient.addColorStop(0, '#ff0000') // red
gradient.addColorStop(0.3, '#ffff00')
gradient.addColorStop(1, '#ffff94') // yellow
context.fillStyle = gradient
context.fillRect(0, 0, 512, 512)

export const texture = new CanvasTexture(canvas)
texture.needsUpdate = true