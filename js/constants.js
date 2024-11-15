const Elements = {
	CopyrightText: document.getElementById('CopyrightText'),
	ShootingLinesContainer: document.getElementById('ShootingLinesContainer'),
};

for (const key in Elements) {
	if (Elements[key] === null) {
		console.error(`Element ${key} not found`);
	}
}

export default Elements;
