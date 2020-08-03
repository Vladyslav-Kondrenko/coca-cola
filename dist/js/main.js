$(document).ready(function(){

  $(window).on("load", function() {
    
    // появление диалога после 3 секунд
    $('.main__message-wrapper').delay(3000).fadeIn(500);
  
  }); 


  // активация слика для подарков
  $('.present__info-carusel').slick({
    slidesToShow: 1,
    draggable: false,
    fade: true,
		dots: true,
		arrows: false,
		dotsClass: 'present__choice-list',
    appendDots: $('.present__choice-wrapper'),
  });

  
  // menu button 
  $('.menu__btn, .menu__mobile-link').on('click',function(){
    $('.menu__btn-background').toggleClass('menu__btn-background--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__mobile').toggleClass('menu__mobile--active');
    setTimeout(() => {
      $('.menu__mobile-item').toggleClass('menu__mobile-item--active');
    }, 500);
  });


  // Select
  $('.write__select-link').click(function(){
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.write__select-drop');

    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
      dropBlock.slideDown();

      /* Выделяем ссылку открывающую select */
      $(this).addClass('active');

      /* Работаем с событием клика по элементам выпадающего списка */
      $('.write__select-drop').find('li').click(function(){

        /* Заносим в переменную HTML код элемента
        списка по которому кликнули */
        var selectResult = $(this).html();

        /* Находим наш скрытый инпут и передаем в него
        значение из переменной selectResult */
        $(this).parent().parent().find('input').val(selectResult);

        /* Передаем значение переменной selectResult в ссылку которая
        открывает наш выпадающий список и удаляем активность */
        $(this).parent().parent().find('.write__select-link').removeClass('active').html(selectResult);

        /* Скрываем выпадающий блок */
        dropBlock.slideUp();
      });

    /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
      $(this).removeClass('active');
      dropBlock.slideUp();
    }

    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
  }); 


// активация fullpage
$('#fullpage').fullpage({
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  anchors:['main', 'present', 'write'],
  // responsiveHeight: 768,
  responsiveWidth: 768
  // fixedElements: '#snow-particles'
});


// Фикс для бага со звездочками при изменении ширины экрана
var isEvent = false;
$( window ).on( 'resize', function() {
    if ( !isEvent ) {
        stars();
        isEvent = true;
        setTimeout( function() {
            isEvent = false;
        }, 1500 );
    }
} )


function stars(){
   // particles for stars
   particlesJS('stars-particles', {
    "particles": {
      "number": {
        "value": 25,
        "density": {
          "enable": false,
          "value_area": 1600
        }
      },
      "color": {
        "value": "#fcf9bf"
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
          "src": "img/star.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3.164942178940961,
          "opacity_min": 0.5514485514485514,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 2,
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
        "speed": 0,
        "direction": "left",
        "random": true,
        "straight": true,
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
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
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
          "distance": 200,
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
  })
}

stars()

const snow_particles = {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
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
      "value": 0.74,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.6,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
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
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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

// particles for snow
particlesJS('snow-particles-1', snow_particles )
particlesJS('snow-particles-2', snow_particles )
particlesJS('snow-particles-3', snow_particles )

  
});