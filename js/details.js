const detailsContainer = document.querySelector(".details");
// const details_url = `https://zuhair-api.herokuapp.com/api/projects/${location.search.slice(
//   1
// )}`;
const details_url = `http://localhost:3000/api/projects/${location.search.slice(
  1
)}`;
function showDetails() {
  let liked = "bx-like";
  async function getResponse() {
    const response = await fetch(details_url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  getResponse()
    .then(({ project }) => {
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
      let id = document.querySelector(".likes");
      localStorage.getItem(`liked-${id.dataset.id}`)
        ? id.classList.replace("bx-like", "bxs-like")
        : id.classList.replace("bxs-like", "bx-like");
    })
    .catch((error) => {
      console.log(error);
    });
}

showDetails();
