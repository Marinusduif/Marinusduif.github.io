async function getProjects(id) {
	return await fetch('../../../data/projects.json').then(response => response.json()).then(data => {
		if (id) {
			return data.find(project => project.id === parseInt(id));
		}
		return data;
	}).catch(console.error);
}

export default getProjects;
