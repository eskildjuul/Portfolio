class Project {
  constructor(project) {
    this.project = project;
  }

  render() {
    const projectType = this.project.projectType
      ? `<p>${this.project.projectType}</p>`
      : "";

    return `
      <article class="project" id="${this.project.id}">
        <h2>${this.project.title}</h2>
        <p>${this.project.category}</p>
        ${projectType}
        <img src="${this.project.image}" alt="${this.project.title}">
        <p>${this.project.description}</p>
        <p>Min rolle: ${this.project.role}</p>
        <p>Værktøjer: ${this.project.tools.join(" · ")}</p>
        <a href="${this.project.website}" target="_blank" rel="noopener noreferrer">
          ${this.project.buttonText}
        </a>
      </article>
    `;
  }
}

export default Project;
