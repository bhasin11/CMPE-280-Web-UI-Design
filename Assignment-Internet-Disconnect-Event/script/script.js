
window.check=1;

window.setInterval(function(){
  repeater();
}, 4000);

function askquestion(){
	var question = document.getElementById('question').value;
	var clas = document.getElementById('tip');

	if(question.length != 0){
		clas.style.display = 'none';
		if(navigator.onLine == false)	addOfflineQuestion(question);
		else	addOnlineQuestion(question);
		return;
	}
	clas.style.display = 'block';
}

function addOfflineQuestion(question){
	var pending = "pendingQuestion";
	var counter = 0;
	var content = document.getElementById('online').value;
	
	while(localStorage.getItem(pending) != null){
		content = content.concat("<br>&diams;"+localStorage.getItem(pending));
		counter++;
		pending = "pendingQuestion".concat(counter);
	}
	localStorage.setItem(pending, question);
	content = content.concat("<br>&diams;"+question);
	
	document.getElementById('offline').innerHTML = content;
}

function addOnlineQuestion(question){
	var pending = "pendingQuestion";
	var counter = 0;
	var content = "";
	
	while(localStorage.getItem(pending) != null){
		content = content.concat("<br>&diams;"+localStorage.getItem(pending));
		localStorage.removeItem(pending);
		counter++;
		pending = "pendingQuestion".concat(counter);
	}
	if(question != null || question.length != 0){
		content = content.concat("<br>&diams;"+question);
	}
	document.getElementById('offline').innerHTML = "";
	document.getElementById('online').innerHTML = content;
}

function checkData(){
	var pending = "pendingQuestion";
	var counter = 0;
	var content = "";

	while(localStorage.getItem(pending) != null){
		content = content.concat("<br>&diams;"+localStorage.getItem(pending));
		counter++;
		pending = "pendingQuestion".concat(counter);
	}
	document.getElementById('offline').innerHTML = content;
}

function repeater(){
	var clas = document.getElementById('status');
	if(navigator.onLine == false){
		window.check=0;
		clas.innerHTML="Not Connected to Internet.";
		clas.style.display = 'block';
	}
	else{
		if(window.check==0){
			clas.innerHTML="Connected to Internet.";
			clas.style.display = 'block';
			window.check=1;
			addOnlineQuestion("");
		}
		else 	clas.style.display = 'none';
	}
}