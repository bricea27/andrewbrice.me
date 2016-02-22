$(document).on("click", ".show-more", function(){
  if ($(".bio").is(":visible")) {
    $(this).html("<i class='fa fa-bars'></i>");
    $(".bio").fadeOut();
    setTimeout(function(){
      $(".inner-wrap").removeClass("transformed");
    }, 500);
  } else {
    $(this).html("<i class='fa fa-times'></i>");
    $(".inner-wrap").addClass("transformed");
    setTimeout(function(){
      $(".bio").fadeIn();
    }, 500);
  }
});

$(document).on("keydown", "body", function(e){
  if (e.keyCode == 27) {
    $(".bio").fadeOut();
    $(".show-more").html("<i class='fa fa-bars'></i>");
  }
});

//particles.js - http://vincentgarreau.com/particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 270,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#98a4b1"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 3,
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
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
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
        "enable": true,
        "mode": "bubble"
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
});