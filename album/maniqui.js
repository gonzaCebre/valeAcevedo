particlesJS("particles-js",
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


/* const detector = document.getElementById('detector');
detector.addEventListener('click', () => {
	console.log('click')
	detector.parentNode.removeChild(detector);
	setTimeout(()=>{
		window.open("./teiki-risi.html", "_self"); 
	},279000)
}) */