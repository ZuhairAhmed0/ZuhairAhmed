
let progressBar = document.querySelectorAll('.skills .round');
let valueCount = document.querySelectorAll('.skills .value-count');

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

/*<h2>My Skills</h2>
<div class="skill">
	<div class="round html">
		<div class="value-count">0%</div>
	</div>
	<div class="round css">
		<div class="value-count">0%</div>
	</div>
	<div class="round javascript">
		<div class="value-count">0%</div>
	</div>
	<div class="round sass">
		<div class="value-count">0%</div>
	</div>
	<div class="round bootstrap">
		<div class="value-count">0%</div>
	</div>
	<div class="round react">
		<div class="value-count">0%</div>
	</div>
</div> */
// .skill {
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-evenly;
// 	width: 100%;
// 	border-radius: 10px;
//   }
//   .round {
// 	position: relative;
// 	height: 130px;
// 	width: 130px;
// 	background-color: orange;
// 	border-radius: 50%;
// 	display: grid;
// 	place-items: center;
// 	margin: 20px 5px;
// 	&::before {
// 	  content: "";
// 	  width: 90%;
// 	  height: 90%;
// 	  border-radius: 50%;
// 	  position: absolute;
// 	  background: #fff;
// 	}
// 	.value-count {
// 	  color: #231c3d;
// 	  font-size: 30px;
// 	  position: relative;
// 	}
//   }
// }
// $last-text: html css javascript sass bootstrap react;
// @each $text in $last-text {
//   .#{$text} {
// 	position: relative;
// 	&::after {
// 	  content: "#{$text}";
// 	  position: absolute;
// 	  top: 100%;
// 	  font-weight: bold;
// 	}
//   }
		