window.onload = function() {
	var changeContentButton = document.getElementById('send-request');
	var showMarsImagesButton = document.getElementById('show-mars-images');
	var showMarsImages2Button = document.getElementById('show-mars-images-2');
	var showMarsImages3Button = document.getElementById('show-mars-images-3');
	var showMoreMarsImagesButton = document.getElementById('show-more-mars-images');

	var pageSelect = document.getElementById('selector-page');
	var solSelect = document.getElementById('selector-sol');
	var cameraSelect = document.getElementById('selector-camera');

	var marsImages = document.getElementById('mars-images');
	
	var page = '1';
	var sol = '1000';
	var camera = 'rhaz';
	var urlApi;


	pageSelect.addEventListener('click', function(event) {
		page = pageSelect.value;
		document.cookie = 'page=' + pageSelect.value;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
		});
	});

	solSelect.addEventListener('click', function(event) {
		sol = solSelect.value;
		document.cookie = 'sol=' + solSelect.value;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
		});
	});

	cameraSelect.addEventListener('click', function(event) {
		camera = cameraSelect.value;
		document.cookie = 'camera=' + cameraSelect.value;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
		});
	});


	changeContentButton.addEventListener('click', function(event) {
		xhr.get('data/data.json', function(response) {
			console.log(response);
		});
	});

	showMarsImagesButton.addEventListener('click', function(event) {
		page = 1;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
		});
	});

	showMarsImages2Button.addEventListener('click', function(event) {
		page = 2;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
		});
	});

	showMarsImages3Button.addEventListener('click', function(event) {
		page = 3;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
		});
	});

	showMoreMarsImagesButton.addEventListener('click', function(event) {
		page += 1;
		urlApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=" + page + "&sol=" + sol + "&camera=" + camera + "&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo";

		xhr.get(urlApi, function(response) {
			var response = JSON.parse(response);
			showMorePhotos(createPhotoUrlsFromResponse(response));
		});
	});


	function createPhotoUrlsFromResponse(response) {
		var urls = [];

		response.photos.forEach(function(photo) {
			urls.push(photo.img_src);
		});
		return urls;
	}

	function showPhotos(photoUrls) {
		marsImages.innerHTML = '';
		photoUrls.forEach(function(url) {
			var img = document.createElement('img');
			img.src = url;
			marsImages.appendChild(img);
		})
	}

	function showMorePhotos(photoUrls) {
		photoUrls.forEach(function(url) {
			var img = document.createElement('img');
			img.src = url;
			marsImages.appendChild(img);
		})
	}


	//Функція пошуку кукі
	function getCookie(name) {
  		var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  		return matches ? decodeURIComponent(matches[1]) : undefined;
	}


	//Селект для сторінки
	var cookiePage = getCookie("page");
	if (cookiePage!=undefined) {
        pageSelect.value = cookiePage;
    }else{
    	pageSelect.selectedIndex = 0;
    }

	//Селект для дня
    var cookieSol = getCookie("sol");
	if (cookieSol!=undefined) {
        solSelect.value = cookieSol;
    }else{
    	solSelect.selectedIndex = 0;
    }

	//Селект для камери
    var cookieCamera = getCookie("camera");
	if (cookieCamera!=undefined) {
        cameraSelect.value = cookieCamera;
    }else{
    	cameraSelect.selectedIndex = 0;
    }
}

