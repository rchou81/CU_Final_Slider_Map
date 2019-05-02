'use strict' // let the browser know we're serious

//debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoicmNob3U4MSIsImEiOiJjanNjcG43Z2UwNGRwNDNwZWN0NTB0MW04In0.L5P48cRwORYjZkyPJ44quQ'

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v9',
	center: [18.233759, -66.412985],
	zoom: 3,
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

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})


let data = [
    {
        location: [-73.961786,40.798958],
        content: 'Osteria 106<br/><img src="https://lh5.googleusercontent.com/p/AF1QipMfWN8IHehAn28lv0XR-SHePvNLljX13m4lY96a=w408-h306-k-no" />'
    },
    {
        location: [ -73.964300,40.802977],
        content: 'Marlow Bistro<br /><img src="https://lh4.googleusercontent.com/proxy/Ae1OAN807SAJuxO0smr_7jx5Q8D3I6tMzuj0IERYAwTANeE1DNYT9CwxiZAUlEuDF1OQ8TwmrHwrWTZiktd_gVfYE9VuFNZTeqvD9rYaPsymSdPi9BidOSodYfjzCtm2bST5LIECDvKqL7GWsTcSorZqXQeZPg=w408-h408-k-no" />'
   	}, 
    {
        location: [ -73.965829,40.800661],
        content: 'The Ellington<br /><img src="https://lh5.googleusercontent.com/p/AF1QipNUgFuXB_-CWod6ViTggDZyhELg7n5TLoXXNYPU=w408-h229-k-no" />'    
    },
    {
        location: [ -73.965891,40.805801],
        content: 'Le Monde<br /><img src="https://lh5.googleusercontent.com/p/AF1QipPLe0Ap70DD6YpoMVa8KDBRYPsFKwSfUVT1khG7=w408-h544-k-no" />'    
    },
    {
        location: [  -73.963779, 40.803488],
        content: 'Hula Poke<br /><img src="https://lh5.googleusercontent.com/p/AF1QipNoy3fLFuiyHPMoT2g0BiBCjyOp3-cytJkizeB5=w408-h306-k-no" />'    
    },
    ]

    data.forEach(function(d) {

    let marker = new mapboxgl.Marker( {color: 'red'})    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})