
function login(){
	if(document.getElementById('username').value=="" ||document.getElementById('password').value==""){
		document.getElementById("message").style.display = "block";		
	}
	else{
		window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/dashboard.html";
	}
}

function register(){
	if(document.getElementById('fname').value=="" ||
		document.getElementById('lname').value=="" || 
		document.getElementById('email').value=="" ||
		document.getElementById('pass').value==""){
		document.getElementById("message").style.display = "block";		
	}
	else{
		window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/dashboard.html";
	}
}

function takeTest(){
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/q1.html";	
}

function clearLocalStorage(){
	localStorage.removeItem('mathsCorrect');
	localStorage.removeItem('mathsNoAnswer');
	localStorage.removeItem('englishCorrect');
	localStorage.removeItem('englishNoAnswer');
	localStorage.removeItem('audioCorrect');
	localStorage.removeItem('audioNoAnswer');
}

function q1Next(){
	localStorage.removeItem('mathsCorrect');
	localStorage.removeItem('mathsNoAnswer');
	if(document.getElementById('4').checked){
		localStorage.setItem('mathsCorrect', '1');
  	}
  	else if(document.getElementById('3').checked || document.getElementById('2').checked
  		|| document.getElementById('1').checked) {
  	}
  	else{
		localStorage.setItem('mathsNoAnswer', '1');
  	}
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/q2.html";	  	
}

function q1Reset(){
	localStorage.removeItem('mathsCorrect');
	localStorage.removeItem('mathsNoAnswer');
	document.getElementById('4').checked=false;
	document.getElementById('3').checked=false;
	document.getElementById('2').checked=false;
	document.getElementById('1').checked=false;
}

function q2Next(){

	if(document.getElementById('6').checked) {
  		if(localStorage.getItem('mathsCorrect') != null){
			localStorage.setItem('mathsCorrect', '2');
  		}
  		else 	localStorage.setItem('mathsCorrect', '1');
  	}
  	else if(document.getElementById('5').checked || document.getElementById('7').checked
  		|| document.getElementById('8').checked) {}
  	
  	else{
  		if(localStorage.getItem('mathsNoAnswer') != null){
			localStorage.setItem('mathsNoAnswer', '2');
  		}
  		else localStorage.setItem('mathsNoAnswer', '1');
  	}
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/q3.html";	  	
}

function q2Reset(){
	document.getElementById('5').checked=false;
	document.getElementById('6').checked=false;
	document.getElementById('7').checked=false;
	document.getElementById('8').checked=false;
}

function mark1(id){
	document.getElementById('price').innerHTML='$'+document.getElementById(id).value;
}

function mark2(id){
	document.getElementById('company').innerHTML=document.getElementById(id).value;
}

function q3Next(){
	localStorage.removeItem('englishCorrect');
	localStorage.removeItem('englishNoAnswer');
	if(document.getElementById('10').checked && document.getElementById('13').checked) {
  		localStorage.setItem('englishCorrect', '1');
  	}
  	else if( 
  		(document.getElementById('9').checked || 
  		 document.getElementById('10').checked ||
  		 document.getElementById('11').checked)
  		&& 
  		(document.getElementById('12').checked || 
  			document.getElementById('13').checked) || 
  			document.getElementById('14').checked){}
  	
  	else{
  		localStorage.setItem('englishNoAnswer', '1');
  	}
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/q4.html";	  	
}

function q3Reset(){
	localStorage.removeItem('englishCorrect');
	localStorage.removeItem('englishNoAnswer');
	document.getElementById('9').checked=false;
	document.getElementById('10').checked=false;
	document.getElementById('11').checked=false;
	document.getElementById('12').checked=false;
	document.getElementById('13').checked=false;
	document.getElementById('14').checked=false;
}

function q4Next(){
	localStorage.removeItem('audioCorrect');
	localStorage.removeItem('audioNoAnswer');
	if(document.getElementById('15').checked) {
  		localStorage.setItem('audioCorrect', '1');
  	}
  	else if(document.getElementById('16').checked || 
  		 document.getElementById('17').checked ||
  		 document.getElementById('18').checked){}
  
  	
  	else{
  		localStorage.setItem('audioNoAnswer', '1');
  	}
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/survey.html";	  	
}

function q4Reset(){
	localStorage.removeItem('audioCorrect');
	localStorage.removeItem('audioNoAnswer');
	document.getElementById('15').checked=false;
	document.getElementById('16').checked=false;
	document.getElementById('17').checked=false;
	document.getElementById('18').checked=false;
}

function surveyNext(){

	if(document.getElementById('30').value=="" ||
		document.getElementById('city').value=="" ||
		document.getElementById('rooms').value=="") {
		document.getElementById('missing').style.display="block"; 
  	}
  	else{
  		window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/result.html";
  	}
}

function surveySkip(){
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/result.html";
}

function findResults(){
	if(localStorage.getItem('mathsNoAnswer') == null){
		document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+2;
	}
	else if(localStorage.getItem('mathsNoAnswer') == "1"){
		document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+0;


	if(localStorage.getItem('mathsCorrect') == null){
		document.getElementById('mathsCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('mathsScore').innerHTML='Score '+0;
	}
	else if(localStorage.getItem('mathsCorrect') == "1"){
		document.getElementById('mathsCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('mathsScore').innerHTML='Score '+50;
	}
	else{
		document.getElementById('mathsCorrect').innerHTML='Number of Questions Correct: '+2;
		document.getElementById('mathsScore').innerHTML='Score '+100;
	}

	if(localStorage.getItem('englishNoAnswer') == null){
		document.getElementById('readingAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('readingAnswered').innerHTML='Number of Questions Answered: '+0;


	if(localStorage.getItem('englishCorrect') == null){
		document.getElementById('readingCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('readingScore').innerHTML='Score '+0;
	}
	else{
		document.getElementById('readingCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('readingScore').innerHTML='Score '+100;
	}

	if(localStorage.getItem('audioNoAnswer') == null){
		document.getElementById('audioAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('audioAnswered').innerHTML='Number of Questions Answered: '+0;


	if(localStorage.getItem('audioCorrect') == null){
		document.getElementById('audioCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('audioScore').innerHTML='Score '+0;
	}
	else{
		document.getElementById('audioCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('audioScore').innerHTML='Score '+100;
	}
}

function finish(){
	window.location.href = "file:///Users/sidharth/Desktop/Semester/CMPE%20280/Assignment1/index.html";
}