function renderBackgroundLine(parent) {
	const line = document.createElement('span');
	line.style.position = 'absolute';
	line.style.zIndex = '1';
	line.style.width = '5%';
	line.style.aspectRatio = '10/1';
	line.style.background = 'var(--highlight-gradient)';
	line.style.filter = 'blur(2px) brightness(2)';

	const viewportHeight = parent.offsetHeight;
	const viewportWidth = parent.offsetWidth;

	// set the starting position of the line
	let { x, y } = {
		x: -viewportWidth * 0.1, //
		y: Math.random() * viewportHeight,
	};

	parent.appendChild(line);

	const animation = line.animate([
		{ transform: `translate(${x}px, ${y}px)` },
		{ transform: `translate(${viewportWidth}px, ${y}px)` },
	], {
		duration: 2000,
		easing: 'linear',
		fill: 'forwards',
	});

	animation.play();

	animation.onfinish = () => {
		line.remove();
	};
}

export default renderBackgroundLine;
