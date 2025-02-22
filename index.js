const projectsContainer = document.getElementById("projects-container");
const aside = document.getElementsByTagName("aside")[0];

const getTechnologies = (technologies) => {
    let res = "";
    technologies.forEach((technology) => {
        res += `<span class ="technology">${technology}</span>`;
    });
    return res;
};

    const getProject = (project) => `
    <img src='img/projects/${project.image}' alt='${project.title} loading="lazy"'>
    <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p>Tecnologías: ${getTechnologies(project.technologies)}</p>
    </div>

    <a ${project.link ? 'href=' + project.link : "class=disabled"} target="_blank">Watch the repository</a>
`;

const makePresentation = () => {
    const newPresentation = document.createElement("div");
    newPresentation.classList = "presentation";
    // newPresentation.innerHTML += `
    //     <img src="${personalInfo.image}">
    // `
    personalInfo.other.forEach(fact => {
        newPresentation.innerHTML += `
        <div>
            <span>${fact[0]}:</span>
            <span>${fact[1]}</span>
        </div>
    `
    })
    aside.appendChild(newPresentation);
}

const makeLanguages = () => {
    const newLanguages = document.createElement("div");
    newLanguages.classList = "languages";
    personalInfo.languages.forEach(fact => {
        newLanguages.innerHTML += `
        <div>
            <span>${fact[0]}:</span>
            <span>${fact[1]}</span>
        </div>
    `
    })
    aside.appendChild(newLanguages);
}

const makeTechnologies = () => {
    const newTechnologies = document.createElement("div");
    newTechnologies.id = "technologies";
    personalInfo.technologies.forEach(fact => {
        newTechnologies.innerHTML += `
            <div>
            <span>${fact[0]}</span>
            <span>${fact[1]}</span>
            </div>
            <progress max="20" value="${fact[1]}">
        `
    })
    aside.appendChild(newTechnologies);
}

const makeMedia = () => {
    const newMedia = document.createElement("div");
    newMedia.id = "media";
    personalInfo.media.forEach(fact => {
        if (fact[1] !== "") {
            newMedia.innerHTML += `
                <a href=${fact[1]} target="_blank">
                    <img src=${getSocialMedia(fact[0])}>
                </a>
            `
        }
    })
    aside.appendChild(newMedia);
}

const getSocialMedia = (social) => {
    const urlBase = "./img/icons/";
    switch (social) {
        case "instagram":
            return urlBase + "instagram.png";
        case "facebook":
            return urlBase + "facebook.png";
        case "X":
            return urlBase + "X-logo.png";
        case "github":
            return urlBase + "github.png";
        default:
            return urlBase + "default.png";
    }
}

//Execution
projects.forEach((project) => {
    const newProject = document.createElement("div");
    newProject.classList = "project card";
    newProject.innerHTML = getProject(project);
    projectsContainer.appendChild(newProject);
});
makePresentation();
makeLanguages();
makeTechnologies();
makeMedia();