


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

