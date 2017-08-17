function initMap() {
  var uluru = {lat: 37.548271, lng: -121.988571};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  }); 

  var uluru2 = {lat: 28.644800, lng: 77.216721};
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 11,
    center: uluru2
  });
  var marker2 = new google.maps.Marker({
    position: uluru2,
    map: map2
  }); 
}

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function show(a) {
    var arr = new Array(0);

    var employee = {name:"Amit Pandey",email:"amit@aa.com", mobile:"111-111-1111", experience:"Front End Developer", image:'img/amit.jpg'};
    arr.push(employee);

    employee = {name:"Gaurav Misra",email:"gaurav@aa.com", mobile:"111-111-1111", experience:"Back End Developer", image:'img/gaurav.jpg'};
    arr.push(employee);

    employee = {name:"Nitin Gove",email:"nitin@aa.com", mobile:"111-111-1111", experience:"Android Developer", image:'img/nitin.jpg'};
    arr.push(employee);

    employee = {name:"Sidharth Bhasin",email:"sidharth@aa.com", mobile:"111-111-1111", experience:"System Architect", image:'img/sid.jpg'};
    arr.push(employee);

    var emp = arr[parseInt(a)];
    console.log('emp '+emp);
    console.log('arr length '+arr.length);
    console.log('a '+a);

    document.getElementById('mname').innerHTML = emp.name;
    document.getElementById('memail').innerHTML = emp.email;
    document.getElementById('mexp').innerHTML = emp.experience;
    document.getElementById('mphone').innerHTML = emp.mobile;
    document.getElementById('photo').src = emp.image;

    var modal = document.getElementById('myModal');
    console.log('modal is '+modal);
    modal.style.display = "block";
}

function hide(){
  var modal = document.getElementById('myModal');
    console.log('modal is '+modal);
    modal.style.display = "none";
}



var download=document.getElementById("download");

function downloadModel() {
    download.style.display = "block";
}

function closeDownload () {
    download.style.display = "none";
}

// function printDiv(divName) {
//      var printContents = document.getElementById(divName).innerHTML;
//      var originalContents = document.body.innerHTML;
//      document.body.innerHTML = printContents;
//      window.print();
//      document.body.innerHTML = originalContents;
// }


function validate() {

   var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
     var email=document.getElementById('email').value;
    
    if(fname=="")
      alert("Please enter first name");
    else if(lname=="")
      alert("Please enter last name");
    else if(email=="")
      alert("Please enter email ");
    else
    {
      window.location.href="https://drive.google.com/uc?export=download&id=0B2B4m7GjUpFeY0UzdHFVb0F0V1k";
       download.style.display = "none";

    }


}



