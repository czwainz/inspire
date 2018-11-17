const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(callWhenDone) {

		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			console.log('Image Data:', res.data)
			Math.floor(Math.random() * 41)
			//res.data.images is the array of images from spashbase.co
			//get random picture from this array
			//hint math.floor and math.random will generate a random number you can use as the index


			// callWhenDone(THEIMAGE)
		})
	}
}
