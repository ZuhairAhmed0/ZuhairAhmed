import getResponse from './getResponse.js';

const skillsContainer = document.querySelector(".skills .skill");

getResponse("./data/skills.json")
  .then((skills) => {
    skills.forEach(({name, source, icon}) => {
      let html = `
        <a href="${source}" target="_blank" rel="noreferrer">
            <img src="${icon}"
              alt="${name}" width="50" height="50" />
        </a>
      `;
    skillsContainer?.insertAdjacentHTML("beforeend", html);
    });
  })
  .catch((error) => {
    console.log(error);
  });
