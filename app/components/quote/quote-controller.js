import QuoteService from "./quote-service.js";

let qs = new QuoteService

function _drawQuote(quote) {
	let template = `
		<div class="col-8 offset-2">
			<h2 class="my-2"><strong>${quote.quote.body}</strong> <br></h2>
			<h6 class="copyright">COPYRIGHT: ${quote.quote.author}</h6>
		</div>`
	document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(_drawQuote)


	}
}
