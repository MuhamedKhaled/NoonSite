/*- Mostafa El Menshawy*/

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      icon: '/NOON/img/contact_us/vector-smart-object.png',
      map: map
    });
  }