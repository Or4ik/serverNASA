window.onload = function() {
	var changeContentButton = document.getElementById('send-request');
	var showMarsImagesButton = document.getElementById('show-mars-images');
	var showMarsImages2Button = document.getElementById('show-mars-images-2');
	var marsImages = document.getElementById('mars-images');

	changeContentButton.addEventListener('click', function(event) {
		xhr.get('data/data.json', function(response) {
			console.log(response);
		});
	});

	showMarsImagesButton.addEventListener('click', function(event) {
		xhr.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo', function(response) {
			var responseObj = JSON.parse(response);
			var photoUrls = createPhotoUrlsFromResponse(responseObj);
			showPhotos(photoUrls);
		});
	});
	showMarsImages2Button.addEventListener('click', function(event) {
		xhr.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=2&sol=1000&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo', function(response) {
			var response = JSON.parse(response);
			showPhotos(createPhotoUrlsFromResponse(response));
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
}