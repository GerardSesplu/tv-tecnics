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

// Initialize and add the map
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
} 

/*Leaftflet Map*/



/* async function createMap(){

  var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

  await L.tileLayer('https://api.maptiler.com/maps/streets/?key=FV8qcLFLnEU8m35PyC6V#-0.2/0.00000/8.00813', {
    atribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);

  var marker = L.marker([51.5, -0.09]).addTo(map);

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
    date: date,
    hour: hour,
    phone: phone
  };

  return new Promise(function (resolve, reject) {

    const jsonString = JSON.stringify(mailData);
    const url = 'https://localhost:8080/send';
    const xhr = new XMLHttpRequest();

    console.log(jsonString);

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

//createMap();

