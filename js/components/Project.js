class Project {
  constructor(project) {
    this.project = project;
  }

  render() {
    const projectMedia = this.project.video
      ? `<video class="project__video" src="${this.project.video}" controls preload="metadata"></video>`
      : `<img class="project__image" src="${this.project.image}" alt="${this.project.title}">`;

    return `
      <article class="project" id="${this.project.id}">
        <div class="project__content">
          <p class="project__case">${this.project.caseNumber}</p>
          <h2 class="project__title">${this.project.title}</h2>
          <p class="project__category">${this.project.category}</p>
          <div class="project__actions">
            <span class="project__type">${this.project.projectType}</span>
            <a class="project__link" href="${this.project.website}" target="_blank" rel="noopener noreferrer">
              ${this.project.buttonText}
            </a>
          </div>
          <p class="project__description">${this.project.description}</p>
          <p class="project__role">${this.project.role}</p>
        </div>
        <div class="project__media">
          ${projectMedia}
        </div>
      </article>
    `;
  }
}

export default Project;
