var picsToLoad = 0;

var starterTile = document.createElement("img");

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad == 0) {
		imagesDoneLoadingSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady; // this calls the function after image is done loading
	imgVar.src = fileName;
}

function loadImages() {
	var imageList = [
		{varName: starterTile, theFile: "./images/starter_tile.png"}
		];

	picsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
		if (imageList[i].varName != undefined) {
			beginLoadingImage( imageList[i].varName, imageList[i].theFile );
		}

	}
}
