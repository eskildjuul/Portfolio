import Project from "./Project.js";

class ProjectGallery {
  constructor(projects) {
    this.projects = projects;
  }

  render() {
    return this.projects
      .map(project => new Project(project).render())
      .join("");
  }
}

export default ProjectGallery;
