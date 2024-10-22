var className = "active";
var scrollTrigger = 30;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

function initMap(){
    const markers=[{
        lat: -37.8177681687754, 
        lng: 145.124525173501,
    }]
    const fehMarker = '/img/marker.png';
    const centerMap = { lat: -37.8177681687754, lng: 145.124525173501 };
    const mapOptions ={
        center: centerMap,
        zoom: 17,
        disableDefaultUI: true,
        styles: [
            {
              "featureType": "poi",
              "stylers": [
                { "visibility": "off" }
              ]
            }
          ]
    };
    const map = new google.maps.Map(document.getElementById('map-holder'), mapOptions);

    const marker = new google.maps.Marker({
        position:{lat: markers[0]['lat'], lng: markers[0]['lng']},
        map: map,
        icon: fehMarker
    })
}
