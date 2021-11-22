let progressBar = document.querySelectorAll('.skills .round');
let valueCount = document.querySelectorAll('.skills .value-count');
const header = document.querySelector('header');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const home = document.querySelector('.bars');
const navbar = document.querySelector('.navbar ul');
const navbarItem = document.querySelectorAll('.navbar ul li');
const logo = document.querySelector('.logo');
const projectsContainer = document.querySelector('.project');
const thisYear = document.getElementById('thisYear');
const contentMe = document.getElementById('contentMe');
const myNameIs = document.querySelector('.info h3');
myNameIs.textContent = '';
let myName = [...'Zuhair Ahmed'];
let x = 0;


setInterval(() => {
	if(x != myName.length) {
		myNameIs.textContent += myName[x];
		x++;
	}
}, 200 * (x+1));

class Progress {
	static speed = 50;
	constructor(progressValue, progressEndValue, el, count) {
		this.progressValue = progressValue;
		this.progressEndValue = progressEndValue;
		this.el = el;
		this.count = count;
	}
	progress() {
		this.runTime = setInterval(() => {
			this.progressValue++;
			this.count.textContent = `${this.progressValue}%`;
			this.el.style.background = `conic-gradient(
               #f95353 ${this.progressValue * 3.6}deg,
               #cadcff ${this.progressValue * 3.6}deg
            )`;
			if (this.progressValue == this.progressEndValue) {
				clearInterval(this.runTime);
			}
		}, Progress.speed);
	}
}
const skillsOv = function (entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		const html = new Progress(0, 95, progressBar[0], valueCount[0]);
		html.progress();
		const css = new Progress(0, 80, progressBar[1], valueCount[1]);
		css.progress();
		const javascript = new Progress(0, 75, progressBar[2], valueCount[2]);
		javascript.progress();
		const sass = new Progress(0, 75, progressBar[3], valueCount[3]);
		sass.progress();
		const bootstrap = new Progress(0, 90, progressBar[4], valueCount[4]);
		bootstrap.progress();
		const react = new Progress(0, 25, progressBar[5], valueCount[5]);
		react.progress();
	}
};
const oversvskills = new IntersectionObserver(skillsOv, {
	root: null,
	threshold: 0.1,
});
oversvskills.observe(skills);

logo.addEventListener('click', () => {
	location.replace('index.html');
});

function showNavbar() {
	home.addEventListener('click', () => {
		navbar.classList.toggle('fix-top');
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
			navbar.parentElement.parentElement.classList.add('nav-top');
		} else {
			navbar.parentElement.parentElement.classList.remove('nav-top');
		}
	};
	const oversvNav = new IntersectionObserver(stakiy, {
		root: null,
		threshold: 0.5,
	});
	oversvNav.observe(header);
}
fixedNavbar();

window.addEventListener('load', () => {
	AOS.init({
		duration: 200,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});
});

//scroll to
navbarItem.forEach((li) => {
	li.addEventListener('click', (e) => {
		const id = `.${e.target.textContent.toLowerCase()}`;
		document.querySelector(id).scrollIntoView({behavior: 'smooth'});
		navbar.classList.remove('fix-top');
		Array.from(home.children).forEach((span, i) => {
			span.classList.remove(`span${i + 1}`);
		});
	});
});
contentMe.addEventListener('click', () => contact.scrollIntoView({behavior: 'smooth'}));

class addProject {
	static count = 0;
	constructor(name, imgSrc, liveDemo, sourceCode) {
		this.name = name;
		this.imgSrc = imgSrc;
		this.liveDemo = liveDemo;
		this.sourceCode = sourceCode;
		addProject.count++;
	}
	getData() {
		const html = `<div class="card" data-aos="fade-up" data-aos-delay="${addProject.count * 100}">
				<img src="${this.imgSrc}" alt="">
				<div class="text">
					<span>${addProject.count}</span>
					<p>${this.name}</p>
					<div class="overlay">
						<a href="${this.liveDemo}">Live Demo</a>
						<a href="${this.sourceCode}">Source Code</a>
					</div>
				</div>
			</div>`;
		return projectsContainer.insertAdjacentHTML('beforeend', html);
	}
}

const project1 = new addProject('Flavour Food', 'image/zuhair.png', 'https://flavour-food.netlify.app/', 'https://github.com/ZuhairAhmed0/flavour-food');
project1.getData();

const project2 = new addProject('Book Store', 'image/zuhair.jpg', 'https://book-store0.netlify.app/', 'https://github.com/ZuhairAhmed0/bookstore');
project2.getData();

// const project3 = new addProject('Rest countries api', 'image/zuhair.png', 'https://rest-countries0.netlify.app/', 'https://github.com/ZuhairAhmed0/restcountries');
// project3.getData();

const project4 = new addProject('Job Listing', 'image/zuhair.jpg', 'https://jop-listing.netlify.app/', 'https://github.com/ZuhairAhmed0/job-listing-');
project4.getData();

const project5 = new addProject('Ecommerce', 'image/zuhair.png', 'https://e-commercee0.netlify.app/', 'https://github.com/ZuhairAhmed0/eBay');
project5.getData();

const project6 = new addProject('To do list', 'image/zuhair.jpg', 'https://to-do-list9.netlify.app/', 'https://github.com/ZuhairAhmed0/to-do-list');
project6.getData();

const project7 = new addProject('App Simple Note', 'image/zuhair.jpg', 'https://app-simple-note.netlify.app/', 'https://github.com/ZuhairAhmed0/app-simple-note');
project7.getData();

const project8 = new addProject('URL shortening', 'image/zuhair.jpg', 'https://url-shortening0.netlify.app/', 'https://github.com/ZuhairAhmed0/url-shortening');
project8.getData();

const project9 = new addProject('Memory Game', 'image/zuhair.png', 'https://memory-gameel.netlify.app/', 'https://github.com/ZuhairAhmed0/memory-game');
project9.getData();


function activeOv0(entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		navbarItem[0].classList.add('active');
	} else {
		navbarItem[0].classList.remove('active');
	}
}
const oversvActive0 = new IntersectionObserver(activeOv0, {root: null, threshold: 0.7});
oversvActive0.observe(header);

function activeOv1(entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		navbarItem[1].classList.add('active');
	} else {
		navbarItem[1].classList.remove('active');
	}
}
const oversvActive1 = new IntersectionObserver(activeOv1, {root: null, threshold: 0.7});
oversvActive1.observe(about);

function activeOv2(entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		navbarItem[2].classList.add('active');
	} else {
		navbarItem[2].classList.remove('active');
	}
}
const oversvActive2 = new IntersectionObserver(activeOv2, {root: null, threshold: 0.7});
oversvActive2.observe(services);

function activeOv3(entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		navbarItem[3].classList.add('active');
	} else {
		navbarItem[3].classList.remove('active');
	}
}
const oversvActive3 = new IntersectionObserver(activeOv3, {root: null, threshold: 0.7});
oversvActive3.observe(skills);

function activeOv4(entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		navbarItem[4].classList.add('active');
	} else {
		navbarItem[4].classList.remove('active');
	}
}
const oversvActive4 = new IntersectionObserver(activeOv4, {root: null, threshold: 0.7});
oversvActive4.observe(portfolio);

function activeOv5(entris) {
	const [entry] = entris;
	if (entry.isIntersecting) {
		navbarItem[5].classList.add('active');
	} else {
		navbarItem[5].classList.remove('active');
	}
}
const oversvActive5 = new IntersectionObserver(activeOv5, {root: null, threshold: 0.8});
oversvActive5.observe(contact);

// thisYear
thisYear.textContent = new Date().getFullYear();
