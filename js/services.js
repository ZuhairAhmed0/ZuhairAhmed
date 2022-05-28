import getResponse from './getResponse.js';

const servicesContainer = document.querySelector(".services .content");
getResponse("./data/services.json")
  .then((services) => {
    services.forEach((service) => {
      let html = `<div data-aos="fade-up" data-aos-delay="100">
        <i class="bx ${service.icon}"></i>
        <h4>${service.name}</h4>
        <p>
        ${service.description}
        </p>
        <a>Read More</a>
    </div>`;
      servicesContainer?.insertAdjacentHTML("beforeend", html);
    });
  })
  .catch((error) => {
    console.log(error);
  });
