function initMap() {
	// add your code here
	L.mapquest.key = 'mcYBFMbaZEJTgBd9bEKpEHfCpLooFYBU';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.88, -117.236],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});

	L.marker([32.88, -117.236], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).addTo(map);
}