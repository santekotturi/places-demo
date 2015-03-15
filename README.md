Places Demo
==============

## A progressing [ionic](www.ionicframework.com) app demo showing how to use:

1. [ngCordova's Geolocation plugin](http://ngcordova.com/docs/plugins/geolocation/) to locate the user's device
2. [Angular Google Maps](http://angular-ui.github.io/angular-google-maps/#!/) to display a Google Map
3. [Angular Google Places]() to search for Nearby Places

## Working: 
1. Geolocation
2. Google Maps
3. Search nearby based on geolocation

## Not Working:
1. Turning list of returned Nearby Places to markers on the map (currently just logs them to console)


## To use:

1. `git clone https://github.com/skotturi/places-demo.git && cd places-demo`
2. `npm install && bower install`
3. `ionic serve --lab` 
4. Click "Log Nearby Places to console" from the homepage
5. In dev console you'll see the map object printed and the places array. 
