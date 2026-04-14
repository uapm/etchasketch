// script will be here
const container = document.querySelector('.container');
const pixel = document.createElement('div');
let res = 16;


function makeGrid(resolution) {
	const pixDim = `${10 / resolution}cm`
	pixel.style.width = pixDim;
	pixel.style.height = pixDim;
	pixel.style.border = 'solid, black';
	container.appendChild(pixel);
	for (let i = 1; i < resolution ** 2 && i < 10000; i++) {
	const looPix = pixel.cloneNode(true);
	container.appendChild(looPix);
	}
}	











