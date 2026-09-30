import { projects } from "./data/projects.js";
import ProjectGallery from "./components/ProjectGallery.js";

const projectDetails = document.querySelector("#project-details");

if (projectDetails) {
	const projectGallery = new ProjectGallery(projects);
	projectDetails.innerHTML = projectGallery.render();
}

const contentsToggle = document.querySelector("#contents-toggle");
const contentsMenu = document.querySelector("#contents-menu");

if (contentsToggle && contentsMenu) {
	contentsToggle.addEventListener("click", () => {
		const isOpen = contentsMenu.classList.toggle("is-open");
		contentsToggle.setAttribute("aria-expanded", isOpen);
	});

	contentsMenu.querySelectorAll("a").forEach(link => {
		link.addEventListener("click", () => {
			contentsMenu.classList.remove("is-open");
			contentsToggle.setAttribute("aria-expanded", "false");
		});
	});
}
