let progress = document.getElementById("progress");
let controlBtn = document.getElementById("controlBtn");
let song = document.getElementById("song");

song.onloadedmetadata = () => {
	progress.max = song.duration;
	progress.value = song.currentTime;
};

function playPause() {
	if (controlBtn.classList.contains("fa-pause")) {
		song.pause();
		controlBtn.classList.add("fa-play");
		controlBtn.classList.remove("fa-pause");
	} else {
		song.play();
		controlBtn.classList.remove("fa-play");
		controlBtn.classList.add("fa-pause");
	}
}

if (song.play()) {
	setInterval(() => {
		progress.value = song.currentTime;
	}, 1000);
}

progress.onchange = () => {
	song.play();
	song.currentTime = progress.value;
	controlBtn.classList.remove("fa-play");
	controlBtn.classList.add("fa-pause");
};
