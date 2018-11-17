//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let is = new ImageService


function drawImage(imgArr) {
  let index = Math.floor(Math.random() * 41)
  document.body.style.backgroundImage = `url(${imgArr[index].url})`
}

export default class ImageController {
  constructor() {
    is.getImage(drawImage)
  }
}

