//PARTICLES
particlesJS("particles-js",
	{
		"particles": {
			"number": {
				"value": 10,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#000000"
			},
			"shape": {
				"type": "image",
				"stroke": {
					"width": 0,
					"color": "#000"
				},
				"polygon": {
					"nb_sides": 6
				},
				"image": {
					"src": "../media/antifaz-min.png",
					"width": '100px',
					"height": '100px'
				}
			},
			"opacity": {
				"value": 0.3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 164.3497362387161,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 10,
					"size_min": 40,
					"sync": true
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 200,
				"color": "#ffffff",
				"opacity": 1,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 8,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
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
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 292.34779642848423,
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

setTimeout(()=>{
	window.open("./como-vos.html", "_self");
},192000)