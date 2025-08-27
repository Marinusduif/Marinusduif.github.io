document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('img');
	images.forEach(img => {
		img.style.cursor = 'zoom-in';
		img.addEventListener('click', function (e) {
			// Prevent multiple overlays
			if (document.querySelector('.img-fullscreen-overlay')) return;

			const overlay = document.createElement('div');
			overlay.className = 'img-fullscreen-overlay';

			const fullscreenImg = document.createElement('img');
			fullscreenImg.src = img.src;
			fullscreenImg.alt = img.alt || '';

			overlay.appendChild(fullscreenImg);
			document.body.appendChild(overlay);

			overlay.addEventListener('click', function () {
				overlay.remove();
			});
		});
	});
});
