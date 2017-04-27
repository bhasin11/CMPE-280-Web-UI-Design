(function(){

	function hover(e){
		e.preventDefault();
		e.stopPropagation();
		if(e.type == "dragover")	e.target.className = "hover";
		else	e.target.className = "";
	}

	function handler(e){
		hover(e);
		var files = e.dataTransfer.files || e.target.files;
		for (var j = 0, k; k = files[j]; j++) 	addfile(k);
	}

	function addfile(filename){
		var messages = document.getElementById("messages");
		messages.innerHTML = messages.innerHTML + 
			"<p>File Name:  <b>" + filename.name +"</b></p>";
	}

	function init(){
		var	droparea = document.getElementById("droparea");
		var newfiles = document.getElementById("newfiles");

		if (new XMLHttpRequest().upload){
			droparea.addEventListener("dragleave", hover, false);
			droparea.addEventListener("dragover", hover, false);
			droparea.addEventListener("drop", handler, false);
		}
	}
	if (window.FileReader && window.FileList && window.File)	init();
})();