function initMap() {

  function oneFunction(name, shop, googleMaps, street, cityStateZip) {
    return '<div id="info-window"><h1>'+name+'</h1><p>'+shop+'</p><a href='+googleMaps+' target="_blank">'+street+'<br />'+cityStateZip+'</a></div></div>'
  }











	var dailyOffOne = {
		info: oneFunction('The Brewery', 'Brewery', 'https://goo.gl/maps/HXQC8yGDfnE2', '29 W Main St', 'Lexington, KY 40507'),

		lat: 38.050015,
		long: -84.500021
	};

	var dailyOffTwo = {
    info: oneFunction('Country Boy Brewing', 'Brewery', 'https://goo.gl/maps/Qn3cyLWLr2D2', '124 Malabu Dr #110', 'Lexington, KY 40503'),

		lat: 37.994670,
		long: -84.508370
	};

  var sunergosOne = {
    info: oneFunction('Tillerton Brewery', 'Brewery', 'https://goo.gl/maps/gMaGKXqZcqt', '2122 S Preston St', 'Louisville, KY 40217'),

		lat: 38.216682,
		long: -85.745239
	};

  var sunergosTwo = {
    info: oneFunction('Youngsman Town Brewing', 'Brewery', 'https://goo.gl/maps/4CKiiUfLjh32', '306 West Woodlawn Ave', 'Louisville, KY 40214'),

		lat: 38.181480,
		long: -85.766998
	};

  var sunergosThree = {
    info: oneFunction('Smith + Co.', 'Brewery', 'https://goo.gl/maps/VirbejfU5zv', '231 South 5th St', 'Louisville, KY 40202'),

		lat: 38.254517,
		long: -85.758438
	};

  var sunergosFour = {
    info: oneFunction('Ailing Ale Company', 'Brewery', 'https://goo.gl/maps/PFJVu1YRqXF2', '1647 Norris Place', 'Louisville, KY 40205'),

		lat: 38.224983,
		long: -85.706398
	};

  var quillsOne = {
    info: oneFunction('Pintglass Co.', 'Brewery', 'https://goo.gl/maps/A2G1CBkZawB2', '802 E Main St', 'Louisville, KY 40206'),

    lat: 38.254379,
    long: -85.737556
};

  var quillsTwo = {
      info: oneFunction('Quill Brewery', 'Brewery', 'https://goo.gl/maps/2FiFfSoXANS2', '930 Baxter Ave', 'Louisville, KY 40204'),

      lat: 38.241535,
      long: -85.725563
};

  var quillsThree = {
      info: oneFunction('Sooner Ale', 'Brewery', 'https://goo.gl/maps/77NaaDE668y', '327 W Cardinal Blvd', 'Louisville, KY 40208'),

      lat: 38.220856,
      long: -85.762146
};


  var quillsFour = {
      info: oneFunction('Broo Ur Eee', 'Brewery', 'https://goo.gl/maps/Cc7bpgbJLN92', '117 St. Matthews Ave #3117', 'Louisville, KY 40207'),

      lat: 38.253548,
      long: -85.652733
};

  var quillsFive = {
      info: oneFunction('Be Ear Company', 'Brewery', 'https://goo.gl/maps/43iZ5KCtQiK2', '137 E Market St', 'New Albany, IN 47150'),

      lat: 38.285255,
      long: -85.821808
};

  var quillsSix = {
      info: oneFunction('Pine Tea Glass Co.', 'Brewery', 'https://goo.gl/maps/aE1eAyrr6LF2', '335 W 9th St', 'Indianapolis, IN 46202'),

      lat: 39.779377,
      long: -86.164472
};

  var baristaParOne= {
    info: oneFunction('The Parlor', 'Brewery', 'https://goo.gl/maps/tedz7U9ZjT92', '519 Gallatin Ave', 'Nashville, TN 37206'),

    lat: 36.181824,
    long: -86.749100
};

  var baristaParTwo = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/vTZ9wg7fnjS2', '610 Magazine St', 'Nashville, TN 37203'),

    lat: 36.152016,
    long: -86.782898
};

  var baristaParThree = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/1bHNCqEhej82', '1230 4th Ave N', 'Nashville, TN 37208'),

    lat: 36.176331,
    long: -86.787041
};

  var revelatorOne = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/C1YENqbgXsp', '1826 3rd Ave N #101', 'Birmingham, AL 35203'),

    lat: 33.511986,
    long: -86.815964
};

  var revelatorTwo = {
    info: oneFunction('Brewery', 'Breweryp', 'https://goo.gl/maps/bT4p76xVSLF2', '2510 Park Lane Ct S', 'Mountain Brook, AL 35223'),

    lat: 33.486469,
    long: -86.774100
};

  var revelatorThree = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/6a6EJKDz2sB2', '437 Memorial Dr SE A5', 'Atlanta, GA 30312'),

    lat: 33.768284,
    long: -84.251732
};

  var revelatorFour = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/zwSVsazuKNC2', '675 Ponce De Leon Ave NE Ste NW127', 'Atlanta, GA 30308'),

    lat: 33.772310,
    long: -84.365920
};

  var revelatorFive = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/iW13mqYyvYL2', '637 Tchoupitoulas St', 'New Orleans, LA 70130'),

    lat: 29.946800,
    long: -90.067740
};

  var revelatorSix = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/kFRpkCHmDX22', '900 Camp St', 'New Orleans, LA 70130'),

    lat: 29.943600,
    long: -90.070640
};

  var revelatorSeven = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/9p2pHwwq39o', '1817 21st Ave S', 'Nashville, TN 37212'),

    lat: 36.142450,
    long: -86.800090
};

  var revelatorEight = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/iayp7eR8fYD2', '550 King St #150', 'Charleston, SC 29403'),

    lat: 32.792450,
    long: -79.940480
};

var heartOne = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/hBEzH8Vhkzm', '5181 SE Woodstock Blvd', 'Portland, OR 97206'),

    lat: 45.479200,
    long: -122.608470
};

var heartTwo = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/q3oxjt8FGKQ2', '537 SW 12th Ave', 'Portland, OR 97205'),

    lat: 45.523320,
    long: -122.698300
};

var heartThree = {
    info: oneFunction('Brewery', 'Brewery', 'https://goo.gl/maps/GnX5KWWct452', '5181 SE Woodstock Blvd', 'Portland, OR 97206'),

    lat: 45.523110,
    long: -122.643180
};


















	var locations = [
      [dailyOffOne.info, dailyOffOne.lat, dailyOffOne.long, 0],
      [dailyOffTwo.info, dailyOffTwo.lat, dailyOffTwo.long, 1],
      [sunergosOne.info, sunergosOne.lat, sunergosOne.long, 2],
      [sunergosTwo.info, sunergosTwo.lat, sunergosTwo.long, 3],
      [sunergosThree.info, sunergosThree.lat, sunergosThree.long, 4],
      [sunergosFour.info, sunergosFour.lat, sunergosFour.long, 5],
      [quillsOne.info, quillsOne.lat, quillsOne.long, 6],
      [quillsTwo.info, quillsTwo.lat, quillsTwo.long, 7],
      [quillsThree.info, quillsThree.lat, quillsThree.long, 8],
      [quillsFour.info, quillsFour.lat, quillsFour.long, 9],
      [quillsFive.info, quillsFive.lat, quillsFive.long, 10],
      [quillsSix.info, quillsSix.lat, quillsSix.long, 11],
      [baristaParOne.info, baristaParOne.lat, baristaParOne.long, 12],
      [baristaParTwo.info, baristaParTwo.lat, baristaParTwo.long, 13],
      [baristaParThree.info, baristaParThree.lat, baristaParThree.long, 14],
      [revelatorOne.info, revelatorOne.lat, revelatorOne.long, 15],
      [revelatorTwo.info, revelatorTwo.lat, revelatorTwo.long, 16],
      [revelatorThree.info, revelatorThree.lat, revelatorThree.long, 17],
      [revelatorFour.info, revelatorFour.lat, revelatorFour.long, 18],
      [revelatorFive.info, revelatorFive.lat, revelatorFive.long, 19],
      [revelatorSix.info, revelatorSix.lat, revelatorSix.long, 20],
      [revelatorSeven.info, revelatorSeven.lat, revelatorSeven.long, 21],
      [revelatorEight.info, revelatorEight.lat, revelatorEight.long, 22],
      [heartOne.info, heartOne.lat, heartOne.long, 23],
      [heartTwo.info, heartTwo.lat, heartTwo.long, 24],
      [heartThree.info, heartThree.lat, heartThree.long, 25],
    ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 37.686, lng: -97.324},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
