window.addEventListener('scroll', function(){

  var header = document.querySelector('.navbar');
  var square = document.querySelector('.tv-square');
  var line = document.querySelector('.nav-line-header');
  var list = document.querySelector('.nav-list');

  header.classList.toggle('sticky', window.scrollY > 0);
  square.classList.toggle('sticky-square', window.scrollY > 0);
  line.classList.toggle('sticky-line', window.scrollY > 0);
  list.classList.toggle('sticky-list', window.scrollY > 0);

});

/* // Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 41.384, lng: 2.166 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
} */

function printMsg(){

  document.getElementById('contactEmail').value = '';
  document.getElementById('contactName').value = '';
  document.getElementById('msg-input').value = '';
 

}

function printErrorMsg(){

  document.getElementById('contactEmail').value = '';
  document.getElementById('contactName').value = '';
  document.getElementById('msg-input').value = '';
  

}


function sendMail(){

  const email = document.getElementById('contactEmail').value;
  const title = document.getElementById('contactName').value;
  const text = document.getElementById('msg-input').value;
  const date = document.getElementById('contactDate').value;
  const hour = document.getElementById('contactHour').value;
  const phone = document.getElementById('contactPhone').value;

  const mailData = {
    email: email,
    title: title,
    text: text,
    date: hour,
    hour: hour,
    phone: phone
  };

  return new Promise(function (resolve, reject) {

    const jsonString = JSON.stringify(mailData);
    const url = 'https://tv-tecnics.herokuapp.com/send';
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(jsonString);    

    xhr.onload = function(){
        resolve(this.responseText)
      };

    xhr.onerror = function(){
        reject(new Error('Network Error'))
      };
  });
}

function makeRequest(){

  sendMail().then(function(jsonString){
    document.getElementById('button-form').insertAdjacentHTML('afterend', '<span id="span-msg-sended">*Missatge enviat correctament');
  }).catch( function(err){
    document.getElementById('button-form').insertAdjacentHTML('afterend', "<span id='span-msg-error'>*El missatge no s'ha pogut enviar");
  });
}


