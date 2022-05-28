import getResponse from "./getResponse.js";

const projectsContainer = document.querySelector(".project");
let count = 0;

function showProjects() {
  getResponse("./data/projects.json")
    .then((projects) => {
      projects.forEach((project, i) => {
        const html = `<div class="card" data-aos="fade-up" data-aos-delay="${
          i + 1 * 100
        }">
				<img src="${project.imgSrc}" alt="">
				<div class="text">
					<span>${i + 1}</span>
					<div class="project-name">
          <p>${project.name}</p> 
          
          <i class="bx bx-like likes" data-id=${project._id}>
              <samp>${project.likes}</samp>
          </i>
          </div>
					<div class="overlay">
						<a href="${project.liveDemo}">Live Demo</a>
						<a href="details.html?${project._id}" data-id=${project._id}>Details</a>
					</div>
				</div>
			</div>`;
        projectsContainer?.insertAdjacentHTML("beforeend", html);
      });

      const bxLike = document.querySelectorAll(".likes");
      liked(bxLike);
    })
    .catch((error) => {
      console.log(error);
    });
}

showProjects();

function liked(bxLike) {
  bxLike.forEach((i) => {
    let id = i.dataset.id;
    if (localStorage.getItem(`liked-${id}`)) {
      i.classList.replace("bx-like", "bxs-like");
    }
    i.addEventListener("click", (e) => {
      if (localStorage.getItem(`liked-${id}`)) {
        localStorage.removeItem(`liked-${id}`);
        e.target.classList.replace("bxs-like", "bx-like");
        e.target.innerHTML = `<samp style="width: 30px">${0}</samp>`;
      } else {
        localStorage.setItem(`liked-${id}`, id);
        e.target.classList.replace("bx-like", "bxs-like");
        e.target.innerHTML = `<samp style="width: 30px">${1}</samp>`;
      }
    });
  });
}
