const container = document.querySelector('.container');
const pixel = document.createElement('div');
const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', () => makeGrid(input.value))

function makeGrid(resolution) {
	removeAllChildNodes(container);
	if (resolution <= 100) {
	function changeColor(id) {
		let rgbValue = getRandomRgbValue();
		const pix = document.querySelector(id);
		if (pix.dataset.opacity !== '100') {
			let opacityOld = pix.dataset.opacity;
			opacityNew = +opacityOld +10;
			pix.style.background = `rgb(${rgbValue} / ${opacityNew}%)`
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
	}} else {
		console.log('input too high')
	}
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomRgbValue() {
	let randomize = () => Math.floor(Math.random() * 255)
	let red = randomize();
	let blue = randomize();
	let green = randomize();
	return `${red} ${green} ${blue}`
}