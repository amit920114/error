document.addEventListner('DOMContentLoaded',() =>{
	//connect to web Socket
	var socket = io.connect(location.protocol + '//' +
		document.domain + ':' + location.port);
	//when connected configure buttons

	socket.on('connect',() =>{
		//each button should emit a "submit vote" event
		document.querySelectorAll('button').forEach(button =>{
			button.onclick= () =>{
				const selection = button.dataset.vote;
				socket.emit('submit vote',{'selection':selection});
			};
		});
	});
});