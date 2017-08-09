var socket = "";
		var message = "";
		var live = document.getElementById("live");
		live.innerHTML = "";
		var toss = document.getElementById("toss");
		toss.innerHTML = "";
		var i = 0;
		
		socket.onopen = function(){ open();};
		socket.onclose = function(){ close();};
		socket.onmessage = function(message){ receive(message);};
		socket.onerror = function(){ error();};
		
		function begin(){
			socket = new WebSocket("ws://localhost:8080/WebSocketServerExample/websocketendpoint");
			open();
		}
		function open(){
			toss.innerHTML = "Match is live. <br><br>";
			window.setInterval(function(){
			  send();
			  console.log('calling');
			}, 5000);
		}
		function close(){
			live.innerHTML = "Disconnected. <br><br>" + live.innerHTML;
		}
		function receive(message){
			if(i++ == 0){
				toss.innerHTML = "Match is live. <br>" + message.data;
			}
			else{
				var temp = live.innerHTML;
				live.innerHTML = message.data + "<br><br>" + temp;
			}
		}
		function error(){
			live.value += "Error Encountered. Please try later. <br>" + live.innerHTML;
		}
		function send(){
			socket.send("");
		}