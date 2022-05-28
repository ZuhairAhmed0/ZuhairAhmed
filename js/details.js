import getResponse from './getResponse.js';

const detailsContainer = document.querySelector(".details");
function showDetails() {
  let liked = "bx-like";
 
  getResponse("../data/projects.json")
    .then((projects) => {
      const id = location.search.slice(1);
      console.log(id);
      const targerProject = projects.filter(project => project._id === id)
      const project = targerProject[0];
      const html = `<div class="card" data-aos="fade-up" data-aos-delay="100">
          <img src="${project.imgSrc}" alt="">
          <div class="text">
            <div class="project-name"><p>${project.name}</p>
                      <a href="${project.liveDemo}" class="btn">Live Demo</a>
                      <i class="bx ${liked} likes"  data-id=${project._id}>
                      <samp>${project.likes}</samp>
                      </i> </div>
          </div>
        </div>
              <div class="description" data-aos="fade-up" data-aos-delay="200">
              <h3>Details</h3>
              <p>${project.description}</p>
        </div>
              <div class="tools description" data-aos="fade-up" data-aos-delay="300">
              <h3>Tools</h3>
              <p>${project.tools.map((tool) => "<br>" + tool)}</p>
          </div>
          
              `;
      detailsContainer?.insertAdjacentHTML("afterbegin", html);
      let likes = document.querySelector(".likes");
      localStorage.getItem(`liked-${likes.dataset.id}`)
        ? likes.classList.replace("bx-like", "bxs-like")
        : likes.classList.replace("bxs-like", "bx-like");
    })
    .catch((error) => {
      console.log(error);
    });
}

showDetails();
