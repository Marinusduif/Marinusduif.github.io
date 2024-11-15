import { pageId, ProjectDescriptionElement, ProjectImagesElement, ProjectLinkElement, ProjectTitleElement } from './constants.js';
import getProjects from '../../helpers/getProjects.js';

async function renderPageProject() {
	const project = await getProjects(pageId);
	console.log(project);

	if (!project) {
		window.location.href = '/';
	}

	window.document.title += project.name;

	ProjectTitleElement.innerText = project.name;
	ProjectDescriptionElement.innerText = project.description;
	ProjectLinkElement.href = project.link;

	project.images.forEach(image => {
		addProjectImage(ProjectImagesElement, image, project.name);
	});
}

function addProjectImage(parent, image, alt) {
	ProjectImagesElement.insertAdjacentHTML('beforeend', `
		<img src="${ image }" alt="${ alt }" class="project-image">
		`);
}

renderPageProject().catch(console.error);
