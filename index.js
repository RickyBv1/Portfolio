const projectsContainer = document.getElementById('cards-container');

const getTechnologies = (technologies) => {
    let res = "";
    technologies.forEach(technology => {
        res += `<span class ="technology">${technology}</span>`
    })
    return res
}

projects.forEach(project => {
    const newProject = document.createElement("div");
    newProject.classList = "card project";
    projectsContainer.appendChild(newProject);
    newProject.innerHTML = `
    <img src="img/projects/${project.image}">
    <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p>Technologies: ${getTechnologies(project.technologies)}</p>
    </div>
    <a href="${project.link}" target="_blank">See project</a>
    `
})
