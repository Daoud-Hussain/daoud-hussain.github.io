particlesJS('particles-js', {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: '#fff'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#fff'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png',
				width: 100,
				height: 100
			}
		},
		
		opacity: {
			value: 0.2,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#808080',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
  detect_on: 'window',
  events: {
    onhover: {
      enable: false,  // Disable onhover event
      mode: 'repulse'
    },
    onclick: {
      enable: false,
      mode: 'push'
    }
  },
  modes: {
    'repulse' : {
      distance: 70,
      duration: 0.4
    },
    'push' : {
      particles_nb: 4
    }
  }
},
	retina_detect: true
});

//Typing animation Script
var typed = new Typed(".typing", {
	strings: ["Full-Stack Developer", "MERN Fellow", "Open-Source Contributer ", "React-native developer"],
	typeSpeed: 65,
	backSpeed: 40,
	loop: true
})

const allElements = document.querySelectorAll('.animated-text');

document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('.scroll-section');
	const navItems = document.querySelectorAll('.navbar a');
  
	function changeNavBackground() {
	  const scrollPosition = window.scrollY;
  
	  sections.forEach((section, index) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
  
		if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
		  navItems[index].style.backgroundColor = '#ff2e63';
		} else {
		  navItems[index].style.backgroundColor = 'initial';
		}
	  });
	}

	navItems[0].style.backgroundColor = '#ff2e63';
  
	window.addEventListener('scroll', changeNavBackground);
  });


  // DOM Element's
const counters = document.querySelectorAll('.counter');

/*** Using forEach() ***/

/*

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const divider = 5000;
        const speed = 1000;

        const inc = target / divider;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

*/

/*** Same functionality, now using for...of ***/

for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute('data-target');
        const count = +n.innerText;
        const divider = 5000;
        const speed = 20; // 1000 millisecond => 1 second;

        const inc = target / divider;

        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            n.innerText = target;
        }
    };

    updateCount();
}
