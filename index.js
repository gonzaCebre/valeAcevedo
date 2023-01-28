// HAMBURGUER MENU 
const menuBtn = document.getElementById("menuBtn");
const navbarLinks = document.getElementById("navbarLinks");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  console.log("click");
  navbarLinks.classList.toggle("active");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  menuBtn.classList.remove("open");
  menuOpen = false;
});


//OVNI MENU

const ovniMenu = document.getElementById('ovniMenu');
const redesMenu = document.getElementById('redesMenu');

ovniMenu.addEventListener('click', ()=>{
	redesMenu.classList.toggle('no-mostrar')
})



//DISCO
const play = document.getElementById('play');
const card = document.getElementById('card');
const playText = document.getElementById('playText');
const playIcon = document.getElementById('playIcon');


play.addEventListener('click', ()=> {
	card.classList.toggle('active');
	if(playText.textContent == 'VOLVER'){
		play.classList.remove('reverse')
		playText.textContent = 'ESCUCHAR'
		playIcon.classList.remove('volver');

	} else{
		play.classList.add('reverse')
		playText.textContent = 'VOLVER'
		playIcon.classList.add('volver')

	}
})





//CAROUSEL
window.addEventListener("load", function(){
	new Glider(document.querySelector(".carousel__lista"), {
		slidesToShow: 1,
		slidesToScroll: 1,
    draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: ".carousel__anterior",
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 768px
			  breakpoint: 768,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 992,
			  settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			  }
			}
		]
	});
});


particlesJS("sky",
	{
		"particles": {
			"number": {
				"value": 48,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "star",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 4,
					"size_min": 0.3,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 176.3753266952075,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 0
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "bubble"
				},
				"onclick": {
					"enable": false,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 250,
					"size": 0,
					"duration": 2,
					"opacity": 0,
					"speed": 3
				},
				"repulse": {
					"distance": 400,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}
)