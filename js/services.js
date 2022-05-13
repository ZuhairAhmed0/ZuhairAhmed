const servicesContainer = document.querySelector(".services .content");
const services_url = "https://zuhair-api.herokuapp.com/api/services";

async function getResponse() {
  const response = await fetch(services_url, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
getResponse()
  .then(({ services }) => {
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
