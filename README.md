# reactive-maps

Create maps from elements using Reactive. You'll need to have the
Google Maps script included on the page. Yay for globals...

## Install

```
component install segmentio/reactive-maps
```

## Usage

Use it as a plugin either globally or on an instance

```js
var maps = require('reactive-maps');
reactive.use(maps);
```

Then add it to the DOM:

```html
<div data-map="mapOptions"></div>
```

And point it to your options object on your model or view:

```js
reactive(el, model, {
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
});
```