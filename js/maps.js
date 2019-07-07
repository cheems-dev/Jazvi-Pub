window.onload = () => {

  function initMap() {
    // The location of Jazvi
    var jazvi = { lat: -25.344, lng: 131.036 };
    // The map, centerednad style at Jazvi
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4, center: jazvi,
        styles: [
          {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#ff3c41"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ff3c41"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ff3c41"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#72c99f"
              }
            ]
          }
        ]
      });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: jazvi, map: map });
  }

  initMap();

};