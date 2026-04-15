const container = document.querySelector('.container');
const pixel = document.createElement('div');


function makeGrid(resolution) {
	function changeColor(id) {
		const pix = document.querySelector(id);
		if (pix.dataset.opacity !== '100') {
			let opacityOld = pix.dataset.opacity;
			opacityNew = +opacityOld +10;
			pix.style.background = `rgb(0 0 0 / ${opacityNew}%)`
			pix.setAttribute('data-opacity', `${opacityNew}`);
		}
	}
	const pixDim = `${15 / resolution}cm`
	pixel.style.width = pixel.style.height = pixDim;
	pixel.style.border = '0.1px solid, #00000020';

	for (let i = 0; i < resolution ** 2 && i < 10000; i++) {
	let looPix = pixel.cloneNode(true);
	looPix.id = `pixel${i+1}`;
	looPix.setAttribute('data-opacity', '0');
	looPix.addEventListener('mouseover', () => changeColor(`#pixel${i+1}`));

	container.appendChild(looPix);
	let opacity = 0
	}
}