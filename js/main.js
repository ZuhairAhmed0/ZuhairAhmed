const header = document.querySelector("header");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const skills = document.querySelector(".skills");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const home = document.querySelector(".bars");
const navbar = document.querySelector(".navbar ul");
const navbarItem = document.querySelectorAll(".navbar ul li");
const logo = document.querySelector(".logo");
// const projectsContainer = document.querySelector('.project');
const thisYear = document.getElementById("thisYear");
const contentMe = document.getElementById("contentMe");
const myNameIs = document.querySelector(".info h3");
const sendToEmail = document.querySelector(".sendToEmail");
const sendSuccessfully = document.querySelector(".send-successfully");
const toUp = document.querySelector(".toUp");
myNameIs.textContent = "";
let myName = [..."Zuhair Ahmed"];
let x = 0;

toUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

setInterval(() => {
  if (x != myName.length) {
    myNameIs.textContent += myName[x];
    x++;
  }
}, 200 * (x + 1));

logo.addEventListener("click", () => {
  location.assign("/");
});

function showNavbar() {
  home.addEventListener("click", () => {
    navbar.classList.toggle("fix-top");
    Array.from(home.children).forEach((span, i) => {
      span.classList.toggle(`span${i + 1}`);
    });
  });
}
showNavbar();
function fixedNavbar() {
  const stakiy = function (entris) {
    const [entry] = entris;
    if (!entry.isIntersecting) {
      navbar.parentElement.parentElement.classList.add("nav-top");
      toUp.classList.add("showToUp");
    } else {
      toUp.classList.remove("showToUp");

      navbar.parentElement.parentElement.classList.remove("nav-top");
    }
  };
  const oversvNav = new IntersectionObserver(stakiy, {
    root: null,
    threshold: 0.5,
  });
  oversvNav.observe(header);
}
fixedNavbar();

window.addEventListener("load", () => {
  AOS.init({
    duration: 200,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

//scroll to
navbarItem.forEach((li) => {
  li.addEventListener("click", (e) => {
    const id = `.${e.target.textContent.toLowerCase()}`;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    navbar.classList.remove("fix-top");
    Array.from(home.children).forEach((span, i) => {
      span.classList.remove(`span${i + 1}`);
    });
  });
});
contentMe.addEventListener("click", () =>
  contact.scrollIntoView({ behavior: "smooth" })
);

function activeOv0(entris) {
  const [entry] = entris;
  if (entry.isIntersecting) {
    navbarItem[0].classList.add("active");
  } else {
    navbarItem[0].classList.remove("active");
  }
}
const oversvActive0 = new IntersectionObserver(activeOv0, {
  root: null,
  threshold: 0.7,
});
oversvActive0.observe(header);

function activeOv1(entris) {
  const [entry] = entris;
  if (entry.isIntersecting) {
    navbarItem[1].classList.add("active");
  } else {
    navbarItem[1].classList.remove("active");
  }
}
const oversvActive1 = new IntersectionObserver(activeOv1, {
  root: null,
  threshold: 0.7,
});
oversvActive1.observe(about);

function activeOv2(entris) {
  const [entry] = entris;
  if (entry.isIntersecting) {
    navbarItem[2].classList.add("active");
  } else {
    navbarItem[2].classList.remove("active");
  }
}
const oversvActive2 = new IntersectionObserver(activeOv2, {
  root: null,
  threshold: 0.7,
});
oversvActive2.observe(services);

function activeOv3(entris) {
  const [entry] = entris;
  if (entry.isIntersecting) {
    navbarItem[3].classList.add("active");
  } else {
    navbarItem[3].classList.remove("active");
  }
}
const oversvActive3 = new IntersectionObserver(activeOv3, {
  root: null,
  threshold: 0.7,
});
oversvActive3.observe(skills);

function activeOv4(entris) {
  const [entry] = entris;
  if (entry.isIntersecting) {
    navbarItem[4].classList.add("active");
  } else {
    navbarItem[4].classList.remove("active");
  }
}
const oversvActive4 = new IntersectionObserver(activeOv4, {
  root: null,
  threshold: 0.1,
});
oversvActive4.observe(portfolio);

function activeOv5(entris) {
  const [entry] = entris;
  if (entry.isIntersecting) {
    navbarItem[5].classList.add("active");
  } else {
    navbarItem[5].classList.remove("active");
  }
}
const oversvActive5 = new IntersectionObserver(activeOv5, {
  root: null,
  threshold: 0.8,
});
oversvActive5.observe(contact);

// thisYear
thisYear.textContent = new Date().getFullYear();

sendToEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = sendToEmail.name.value,
    email = sendToEmail.email.value,
    phone = sendToEmail.phone.value,
    message = sendToEmail.message.value;

  async function sendData() {
    // https://zuhair-api.herokuapp.com/api
    
    const response = await fetch(`http://localhost:3000/api/sendToEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ username, email, phone, message }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  sendData()
    .then((result) => {
      sendToEmail.name.value = "";
      sendToEmail.email.value = "";
      sendToEmail.phone.value = "";
      sendToEmail.message.value = "";
      sendSuccessfully.textContent = result;
      setTimeout(() => {
        sendSuccessfully.textContent = "";
      }, 5000);
    })
    .catch((error) => {
      console.log(error);
    });
});
