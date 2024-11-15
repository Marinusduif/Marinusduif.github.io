import renderBackgroundLine from './renders/renderBackgroundLine.js';
import Elements from './constants.js';

Elements.CopyrightText.innerText = `© ${new Date().getFullYear()} Marinus van Duijvenbode`;

setInterval(() => {
	renderBackgroundLine(Elements.ShootingLinesContainer)
}, 50);
