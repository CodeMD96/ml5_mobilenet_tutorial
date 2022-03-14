let mobilenet;

let puffin;
let oystercatcher;

const modelReady = () => {
	console.log("Model is ready!!!");
	mobilenet.predict(oystercatcher, gotResults);
}

const gotResults = (error, results) => {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
		let label = results[0].label;
		let prob = results[0].confidence;
		fill(0);
		textSize(64);
		text(label, 10, height - 150);
		createP(label);
		createP(`${prob*100}%`);
	}
}
const imageReady = () => {
	image(oystercatcher, 0, 0, width, height);
}
function setup() {
	createCanvas(640, 480);
	// puffin = createImg('images/puffin.jpg', imageReady);
	// puffin.hide();
	oystercatcher = createImg('images/oystercatcher.jpg', imageReady);
	oystercatcher.hide();
	background(0);
	image(oystercatcher, 0, 0);
	mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
	// put drawing code here
}
