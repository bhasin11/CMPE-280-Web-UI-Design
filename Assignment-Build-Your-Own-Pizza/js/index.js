

function checkSelection(){

  var c = document.getElementsByTagName('input');

  localStorage.removeItem('HAND TOSSED');
  localStorage.removeItem('HANDMADE PAN');
  localStorage.removeItem('CRUNCHY THIN CRUST');
  localStorage.removeItem('BROOKLYN STYLE');
  localStorage.removeItem('GLUTEN FREE CRUST');

  localStorage.removeItem("Small (10')");
  localStorage.removeItem("Medium (12')");
  localStorage.removeItem("Large (14')");
  localStorage.removeItem("X-Large (16')");


  for (var i=0; i<c.length; i++) {
  	var arr = ['HAND TOSSED', 'HANDMADE PAN', 'CRUNCHY THIN CRUST', 'BROOKLYN STYLE', 'GLUTEN FREE CRUST'];
    if (c[i].type == 'radio' && c[i].checked) {
    	console.log(c[i].value);
    	localStorage.setItem('size', c[i].value);
    	if(i<4){
    		localStorage.setItem('crust', ""+arr[0]);
    	}
    	else if(i < 5){
    		localStorage.setItem('crust', ""+arr[1]);

    	}
    	else if (i < 7) {
    		localStorage.setItem('crust', ""+arr[2]);

    	}
    	else if(i<9){
    		localStorage.setItem('crust', ""+arr[3]);

    	}
    	else{
    		localStorage.setItem('crust', ""+arr[4]);
    	}
    	var a  = localStorage.getItem('crust');
    	console.log(a);
    	window.location.href = "build2.html";
    	return;
    } 
  }
  alert('Please select a value');
}

function markToppings(){
	console.log('inside markToppings()');
	var meat = 0, nonmeat = 0;

	var arr = ['Pepperoni', 'Salami', 'Italian Sausage', 'Premium Chicken', 'Sliced Italian Sausage',
				'Beef', 'Philly Steak', 'Ham', 'Bacon', 'Cheddar Cheese', 'Green Peppers',
				'Feta Cheese', 'Jalapeno Peppers', 'Shredded Asaigo', 'Mushrooms', 'Shredded Cheese',
				'Pineapple', 'Banana Peppers', 'Onoins', 'Black Olives', 'Roasted Peppers', 'Garlic',
				'Spinach', 'Diced Tomatoes', 'Hot Sauce'];

	for( var i=0;i<arr.length;i++){
		localStorage.removeItem(arr[i]);
	}

    var c = document.getElementsByTagName('input');
    for (var i=0; i<c.length; i++) {
    	if (c[i].type == 'checkbox' && c[i].checked) {
    		if(i<9) meat++;
    		else nonmeat++;
    		localStorage.setItem(""+c[i].value, "1");
    		console.log(localStorage.getItem(""+c[i].value));
    		console.log(c[i].value);
    	}
    }
    console.log('meat is '+meat);
    console.log('non meat is '+nonmeat);

	window.location.href = "charts.html";
}

function createchart(){
	google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
	console.log('inside drawChart()');
	var arr = ['Pepperoni', 'Salami', 'Italian Sausage', 'Premium Chicken', 'Sliced Italian Sausage',
				'Beef', 'Philly Steak', 'Ham', 'Bacon', 'Cheddar Cheese', 'Green Peppers',
				'Feta Cheese', 'Jalapeno Peppers', 'Shredded Asaigo', 'Mushrooms', 'Shredded Cheese',
				'Pineapple', 'Banana Peppers', 'Onoins', 'Black Olives', 'Roasted Peppers', 'Garlic',
				'Spinach', 'Diced Tomatoes', 'Hot Sauce'];

	var data = new Array(0);
	var h = ['Item', 'Item per Total Item'];
	data.push(h);
	for( var i=0;i<arr.length;i++){
		if(localStorage.getItem(arr[i]) == "1"){
			console.log(arr[i]);
			var item = [arr[i], 1];
			data.push(item);
		}
	}
	console.log('##################');
	
	

	
	var d = google.visualization.arrayToDataTable(data);

        var title = {
          title: 'Your Selection',
          is3D: true,
        };

        var c = new google.visualization.PieChart(document.getElementById('c'));

        c.draw(d, title);
    
}

function sankey(){
	window.location.href = "sankey.html";
}

function createsankey(){
	google.charts.load("current", {packages:["sankey"]});
    google.charts.setOnLoadCallback(drawSankey);
}

function drawSankey(){

	console.log('drawSankey()');

	var meat = 0, nonmeat = 0, i = 0, j=0;
	var size = localStorage.getItem('size');
	var crust = localStorage.getItem('crust');
	console.log('size is '+size);
	console.log('crust is '+crust);

  	var arr = ['HAND TOSSED', 'HANDMADE PAN', 'CRUNCHY THIN CRUST', 'BROOKLYN STYLE', 'GLUTEN FREE CRUST'];
  	var arr2 = ["X-Large (16')", "Large (14')", "Medium (12')", "Small (10')"];
  	var tops = ['Pepperoni', 'Salami', 'Italian Sausage', 'Premium Chicken', 'Sliced Italian Sausage',
				'Beef', 'Philly Steak', 'Ham', 'Bacon', 'Cheddar Cheese', 'Green Peppers',
				'Feta Cheese', 'Jalapeno Peppers', 'Shredded Asaigo', 'Mushrooms', 'Shredded Cheese',
				'Pineapple', 'Banana Peppers', 'Onoins', 'Black Olives', 'Roasted Peppers', 'Garlic',
				'Spinach', 'Diced Tomatoes', 'Hot Sauce'];
  	var data = new Array(0);
  	var meats = new Array(0);
  	var nonmeats = new Array(0);

  	for(i = 0;i<arr.length;i++){
  		if(crust == arr[i]){
  			break;
  		}
  	}
  	for(j = 0;j<arr.length;j++){
  		if(size == arr2[j]){
  			break;
  		}
  	}

  	var item = new Array(0);
  	item.push(arr[i], arr2[j], 1);
  	data.push(item);


  	for(var k=0;k<tops.length;k++){
  		console.log('k is '+k);
  		if(localStorage.getItem(tops[k]) == "1" && k<9){
  			meat++;
  			console.log('topping added '+tops[k]);
  			meats.push(tops[k]);
  		}
  		else if(localStorage.getItem(tops[k]) == "1"){
  			nonmeat++;
  			console.log('topping added '+tops[k]);
  			nonmeats.push(tops[k]);
  		}
  	}

  	if(meat > 0){
  		var item = new Array(0);
  		item.push(arr2[j], 'MEATS', meat);
	  	data.push(item);
  	}
  	if(nonmeat > 0){
  		var item = new Array(0);
  		item.push(arr2[j], 'NON-MEATS', nonmeat);
	  	data.push(item);
  	}

  	for(var k=0;k<meats.length;k++){
  		var item = new Array(0);
  		item.push('MEATS', meats[k], 1);
	  	data.push(item);
  	}

  	for(var k=0;k<nonmeats.length;k++){
  		var item = new Array(0);
  		item.push('NON-MEATS', nonmeats[k], 1);
	  	data.push(item);
  	}

    var d = new google.visualization.DataTable();
    d.addColumn('string', 'From');
    d.addColumn('string', 'To');
    d.addColumn('number', 'Weight');
    d.addRows(data);

    // Set chart options
    var selections = {
      width: 600,
    };

    // Instantiate and draw our chart, passing in some options.
    var c = new google.visualization.Sankey(document.getElementById('s'));
    c.draw(d, selections);
}

function clustermaps(){
	window.location.href = "clustermaps.html";
}



