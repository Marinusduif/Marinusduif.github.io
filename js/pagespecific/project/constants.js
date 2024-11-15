const urlParams = new URLSearchParams(window.location.search);
const pageId = urlParams.get('p');
const ProjectTitleElement = document.getElementById('project-title');
const ProjectDescriptionElement = document.getElementById('project-description');
const ProjectImagesElement = document.getElementById('project-images');
const ProjectLinkElement = document.getElementById('project-link');

if (!pageId) {
	window.location.href = '/';
}

export {
	pageId,
	ProjectTitleElement,
	ProjectDescriptionElement,
	ProjectImagesElement,
	ProjectLinkElement
}
