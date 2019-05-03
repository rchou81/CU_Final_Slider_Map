'use strict' // let the browser know we're serious

//debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoicmNob3U4MSIsImEiOiJjanNjcG43Z2UwNGRwNDNwZWN0NTB0MW04In0.L5P48cRwORYjZkyPJ44quQ'

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/rchou81/cjv7n19rw1rp31gp3n7uen9fl',
	center: [-66.412985,18.233759],
	zoom: 7,
	pitch: 0
})

//create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
	showCompass: true
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
	maxWidth: 80,
	unit: 'imperial'
})


// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
	potisionOptions: {
		enableHighAvvurary: true
	},
	trackUserLocation: true,
	showUserLocation: true,
	fitBoundsOptions: {
	}
})

map.addControl(geolocate, 'top-left')

//this is an event handler
geolocate.on('geolocate', function(event) {
	let lng = event.coords.longitude
	let lat = event.coords.latitude

	//debug
	console.log('geolocated:', lng, lat)

	// format lng lat values and display them on our 'info' element
	document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)	
})