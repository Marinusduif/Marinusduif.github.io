function renderProject(parent, project) {
	const { id, name, description, image, link } = project;

	parent.insertAdjacentHTML('beforeend', `
		<div id="projects-container" title="project ${id}">
			<div class="project">
				<figure class="img-wrapper">
					<img src="${image}" alt="${name}" />
				</figure>
				<h3 class="project-title">${name}</h3>
				<a href="/project.html?p=${id}" class="project-link">Read more</a>
			</div>
		</div>
	`)
}

export default renderProject;
