//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let is = new ImageService

function drawImage() {
  // let image = is.getImage  dont do this
}

export default class ImageController {
  constructor() {
    console.log('hello from image controller')
    is.getImage(drawImage)
  }
  // 
}

