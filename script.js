const container = document.querySelector('.container');
const pixel = document.createElement('div');
let res = 16;



function makeGrid(resolution) {
	let looPix;
	function changeColor() {
		if (opacity !== 100) {
			opacity += 10;
			dynColor = `rgb(0 0 0 / ${opacity}%)`;
			pixel.style.background = dynColor;
			console.log(dynColor)
		}
	}
	const pixDim = `${15 / resolution}cm`
	pixel.style.width = pixDim;
	pixel.style.height = pixDim;
	pixel.style.border = '0.1px solid, #00000020';
	let opacity = 0;
	let dynColor = `rgb(0 0 0 / ${opacity}%)`;
	pixel.style.background = dynColor;
	pixel.addEventListener('mouseover', changeColor);
	container.appendChild(pixel);
	for (let i = 1; i < resolution ** 2 && i < 10000; i++) {
	looPix = pixel.cloneNode(true);
	container.appendChild(looPix);
	}
}