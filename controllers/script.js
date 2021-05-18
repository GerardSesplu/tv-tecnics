/* window.addEventListener('scroll', function(){

  var header = document.querySelector('.navbar');
  var square = document.querySelector('.tv-square');
  var line = document.querySelector('.nav-line-header');
  var list = document.querySelector('.nav-list');

  header.classList.toggle('sticky', window.scrollY > 0);
  square.classList.toggle('sticky-square', window.scrollY > 0);
  line.classList.toggle('sticky-line', window.scrollY > 0);
  list.classList.toggle('sticky-list', window.scrollY > 0);

}); */

// Initialize and add the map
/* function initMap() {
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
}  */

/*Leaftflet Map*/

 async function createMap(){

  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

  var marker = L.marker([51.5, -0.09]).addTo(map);

} 



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
    //const url = 'http://localhost:8080/send';
    const url = 'https://tv-tecnics.herokuapp.com/send';
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

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-div-down',
    prevEl: '.arrow-div-up',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

let position = 0;
let arrowUp = false;
let arrowDown = true;

function arrowActive(value) {

  switch(value){
    case 'down':

      position = position + 1; 
      console.log(position);

      if(position !== 0 && arrowUp == false){
        document.querySelector('.arrow-div-up').insertAdjacentHTML('afterbegin', `<img src="../libs/arrow.png" alt="" class="arrow-img-up" id="arrow-img-up">`);
        arrowUp = true;
        prevButton = '.arrow-img-up'
        document.querySelector('.body').className = 'body2';
      };

      if(position == 2){
        document.querySelector('.arrow-div-down').innerHTML = '';
        arrowDown = false;
        document.querySelector('.body2').className = 'body3';
      }

      break;

    case 'up':

      position = position - 1;
      console.log(position);

      if(position !== 2 && arrowDown == false){
        document.querySelector('.arrow-div-down').insertAdjacentHTML('afterbegin', `<img src="../libs/arrow.png" alt="" class="arrow-img-down" id="arrow-img-down">`);
        arrowDown = true
        document.querySelector('.body3').className = 'body2';
      };

      if(position == 0){
        document.querySelector('.arrow-div-up').innerHTML = '';
        arrowUp = false;
        document.querySelector('.body2').className = 'body';
      }

      break;
  }

}



