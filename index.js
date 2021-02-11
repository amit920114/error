document.addEventListener('DOMContentLoaded', () =>{
	document.querrySelector('#form').onsubmit = () =>{
		// initialise new request

		const request = new XHttpRequest();
		const currency = document.querrySelector('#currency').value;
		request.open('POST', '/convert'):

		// Callback function when function completes.
		request.onload = () => {

			//Extract json data from request

			const data = JSON.parse(request.responseText);

			//update the result div

			if (data.success){
				const contents = `1 USD is equal to ${data.rate} ${currency}`
				document.querrySelector('#result').innerHtml = contents;

			}

			else{
				document.querrySelector('#result').innerHtml='There was an Error';
			}
		}
		//Add data to send with request

		const data = new FormData();
		data.append('currency', currency);

		//send request

		request.send(data);
		return false;
	}
})