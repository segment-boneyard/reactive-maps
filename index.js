var google = window.google;


/**
 * Create markers from the options. This isn't
 * part of the Maps API we need to manually
 * create markers from the options given.
 *
 * @param {GoogleMap} map
 * @param {Object} options
 *
 * @return {[type]}
 */

function createMarkers(map, options) {
  (options.markers || []).forEach(function(mark){
    return new google.maps.Marker({
      position: mark.position,
      map: map,
      title: mark.title
    });
  });
}


/**
 * Reactive binding for creating maps
 *
 * @param {Reactive} reactive
 */

function map(reactive) {
  reactive.bind('data-map', function(el, attr){
    var options = this.value(attr);
    var map = new google.maps.Map(el, options);
    createMarkers(map, options);
  });
}


/**
 * Export the map binding
 *
 * @type {Function}
 */

module.exports = map;