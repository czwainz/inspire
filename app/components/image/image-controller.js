//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let is = new ImageService


function drawImage() {
  let imageArr = is.images
  let imageIndex = Math.floor(Math.random() * imageArr.length)
  let image = imageArr[imageIndex]
  document.body.style.backgroundImage = `url(${image.url})`
}

export default class ImageController {
  constructor() {
    is.getImage(drawImage)
  }
}

