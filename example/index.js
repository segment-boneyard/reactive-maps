var reactive = require('reactive');
var maps = require('reactive-maps');

function app(){
  var el = document.querySelectorAll('[data-map]');
  var model = {
    mapOptions: function(){
      return {
        center: new google.maps.LatLng(37.779187, -122.410698),
        zoom: 14,
        mapTypeId: "roadmap",
        markers: [{
          position: new google.maps.LatLng(37.783, -122.393),
          title:"Hello World!"
        }]
      };
    }
  };

  reactive(el[0], model, {}).use(maps);
}

module.exports = exports = app();