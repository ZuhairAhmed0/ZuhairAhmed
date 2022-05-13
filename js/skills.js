const skillsContainer = document.querySelector(".skills .skill");
const skills_url = "https://zuhair-api.herokuapp.com/api/skills";

async function getResponse() {
  const response = await fetch(skills_url, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
getResponse()
  .then(({ skills }) => {
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
