import renderProject from './renderProject.js';
import getProjects from '../../../helpers/getProjects.js';
import { ProjectsContainerElement } from '../constants.js';

async function renderProjects() {
	const projects = await getProjects();
	console.log(projects);

	projects.forEach(project => {
		renderProject(ProjectsContainerElement, project);
	});
}

export default renderProjects;
