# reactive-maps

Create maps from elements using Reactive. You'll need to have the
Google Maps script included on the page. Yay for globals...

## Install

```
component install segmentio/reactive-maps
```

## Usage

```html
<div data-map="options"></div>
``

```js
var maps = require('reactive-maps');

// Use it as a plugin
reactive.use(maps);

// Then add map options to your view or model
reactive(el, model, {
  options: function(){
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
});
```