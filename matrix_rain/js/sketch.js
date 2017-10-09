var streams = [];
var streamWidth = 20;
var numStreams = window.innerWidth / streamWidth;

function setup() {
	// setup code
	createCanvas(window.innerWidth - 30, window.innerHeight - 30);
	numStreams
	for (var i = 0; i < numStreams; i++) {
		this.streams[i] = new Stream(i * streamWidth, random(-400, 0), random(10, 40), streamWidth);
	}
}

function draw() {
	background(0, 150);

	// draw code
	this.streams.forEach(function (s) {
		s.render();
	});
	this.streams.forEach(function (s) {
		s.update();
	});
}
