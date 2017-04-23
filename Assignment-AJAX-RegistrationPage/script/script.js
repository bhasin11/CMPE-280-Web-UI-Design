function tips(){ //onfocus function
	var clss = document.getElementById('paragraph');
	clss.style.display = "block";
	document.getElementById('invalid').style.display='none';
}

function tipsReverse(){ //onblur function
	var clss = document.getElementById('tips');
	clss.style.display = "none";
	if(!checkPassword(document.getElementById('pass').value)){
		document.getElementById('pass').style.background="#ffb5b5";
		document.getElementById('invalid').style.display='block';
	}
	else{
		document.getElementById('pass').style.background="white";
	}
	clss.style.display = "none";
}

function checkPassword(){ // oninput function
	document.getElementById('upper').innerHTML="1 upper-case letter";
	document.getElementById('lower').innerHTML="1 lower-case letter";
	document.getElementById('number').innerHTML="1 number";
	document.getElementById('length').innerHTML="8 or more characters";
	document.getElementById('char').innerHTML="Uses only these English characters: A-z, 0-9, @, -, _ and .";
	document.getElementById('same').innerHTML="Your password can not be the same as your user ID.";
	document.getElementById('current').style.background="white";
	document.getElementById('current').style.width="0";						

	var clss = document.getElementById('paragraph');
	clss.style.display = "none";
	var clss2 = document.getElementById('tips');
	clss2.style.display = "block";

	var password = document.getElementById('pass').value;
	var upper=false, lower=false, number=false, len=false, char=false, same=false;

	for(var i=0;i<password.length;i++){
		var userid = document.getElementById('userid').value;
		var ch = password.charCodeAt(i);
		if(userid.localeCompare(password) == 0) same=true;
		else{
			if(ch>=48 && ch<=57) number=true;
			else if((ch>=97 && ch<=122)) lower=true;
			else if((ch>=65 && ch<=90 )) upper=true;
			else if((ch == 64 || ch == 45 || ch == 95 || ch == 46)){}
			else	char=true;
		}
		if(password.length >= 8 && password.length<=20) len=true;
	}
	if(same || char){
		if(same){
			document.getElementById('same').innerHTML='<span style="color:red;">&#10006;</span>&nbsp;Your password can not be the same as your user ID.';
			document.getElementById('current').style.background="red";
			document.getElementById('current').style.width="100%";
		}	
		if(char){		
			document.getElementById('char').innerHTML='<span style="color:red;">&#10006;</span>&nbsp;Uses only these English characters: A-z, 0-9, @, -, _ and .';
			document.getElementById('current').style.background="red";
			document.getElementById('current').style.width="100%";
		}
		return false;
	}
	else{
		var pass=0;
		if(upper){
			document.getElementById('upper').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;1 upper-case letter';
			pass+=25;		
		}
		if(lower){
			document.getElementById('lower').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;1 lower-case letter';
			pass+=25;		
		}
		if(number){
			document.getElementById('number').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;1 number';
			pass+=25;		
		}		
		if(len){
			document.getElementById('length').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;8 or more characters';
			pass+=25;		
		}

		document.getElementById('current').style.background="green";
		document.getElementById('current').style.width=pass+"%";		
		if(pass==100){
			document.getElementById('pass').style.background="white";					
			return true;
		}
	}
}

function validatePassword(){ // confirm password field - oninput and onblur function
	var password = document.getElementById('pass').value;
	var p2 = document.getElementById('verifypas').value;

	if(password.localeCompare(p2) == 0 && password != ""){
		document.getElementById('nomatch').style.color="green";		
		document.getElementById('nomatch').innerHTML="Password Matched.";
		document.getElementById('nomatch').style.display="block";
		return true;
	}
	else{
		document.getElementById('nomatch').style.color="red";		
		document.getElementById('nomatch').innerHTML="Password Doesn't Match.";
		document.getElementById('nomatch').style.display="block";
		return false;
	}
}

function rst(){ // on pressing cancel button
	document.getElementById('userid').value="";
	document.getElementById('pass').value="";
	document.getElementById('verifypas').value="";
	document.getElementById('email').value="";
	document.getElementById('verifyemail').value="";
	document.getElementById('answer1').value="";
	document.getElementById('answer2').value="";
	document.getElementById('mobile').value="";
	document.getElementById('address').value="";
	document.getElementById('title').value="";
	document.getElementById('question1').value="";
	document.getElementById('question2').value="";
	document.getElementById('pass').style.background="white";
	document.getElementById('invalid').style.display='none';
	document.getElementById('nomatch').style.display='none';
}

function final(){ // on pressing submit button

        if(document.getElementById('userid').value=="" || 
           document.getElementById('pass').value=="" ||
           document.getElementById('verifypas').value=="" || 
           document.getElementById('email').value=="" ||
	   document.getElementById('verifyemail').value=="" ||
           document.getElementById('answer1').value=="" ||
           document.getElementById('answer2').value=="" || 
           document.getElementById('mobile').value=="" ||
           document.getElementById('address').value=="" || 
           document.getElementById('question1').value=="" || 
           document.getElementById('question2').value==""){
             document.getElementById("txtHint").innerHTML = "Please fill all the fields.";
        }
else{
	if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
	
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
    	var userid = document.getElementById('userid').value;
    	var password = document.getElementById('pass').value;
    	var email = document.getElementById('email').value;
    	var mobile = document.getElementById('mobile').value;
    	var address = document.getElementById('address').value;
        var question1 = document.getElementById('question1').value;
        var question2 = document.getElementById('question2').value;
        var ans1 = document.getElementById('answer1').value;
        var ans2 = document.getElementById('answer2').value;

        xmlhttp.open("GET","http://sidharthbhasin.com/CMPE280/backend.php?userid="+userid+"&password="+password+"&email="+email+"&mobile="+mobile+"&address="+address+"&q1="+question1+"&q2="+question2+"&a1="+ans1+"&a2="+ans2,true);
        xmlhttp.send();
        console.log('line 137');
	var clss = document.getElementById('tips');
	clss.style.display = "none";
}
}