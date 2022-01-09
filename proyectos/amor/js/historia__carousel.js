// Se agregan los id automaticamente:

// 1.lista de elementos
var glider_list = document.querySelectorAll('.carousel__lista');
var dot_list = document.querySelectorAll('.carousel__indicadores');
var anterior_list = document.querySelectorAll('.carousel__anterior');
var anterior_list1 = document.querySelectorAll('.carousel__anterior1');
var siguente_list = document.querySelectorAll('.carousel__siguente');
var siguente_list1 = document.querySelectorAll('.carousel__siguente1');

var num_ant = anterior_list1.length
var num_sig = siguente_list1.length

console.log(anterior_list1)

// 2. Añadir ids
var i = 1;
glider_list.forEach((carousel) => {
    carousel.id = 'carousel' + i
    // console.log(carousel.id);
    i += 1
});

var i = 1;
dot_list.forEach((dot) => {
    dot.id = 'dot' + i
    // console.log(dot.id);
    i += 1
});

// " anteriores y siguentes"

var i = 1;
anterior_list1.forEach((anterior) => {
    anterior.id = 'anterior' + i
    console.log(anterior.id);
    i += 1
});

var i = 6; // anterior_list1.lenght + 1
anterior_list.forEach((anterior) => {
    anterior.id = 'anterior' + i
    console.log(anterior.id);
    i += 1
});

var i = 1;
siguente_list1.forEach((siguente) => {
    siguente.id = 'siguente' + i
    // console.log(siguente.id);
    i += 1;
});

var i = 6;
siguente_list.forEach((siguente) => {
    siguente.id = 'siguente' + i
    // console.log(siguente.id);
    i += 1;
});

console.log('Numero de carouseles: ' + glider_list.length)

// console.log(document.querySelectorAll('.carousel__siguente'));

window.addEventListener('load', function(){
    new Glider(document.querySelector('#carousel1'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot1',
        draggable: true,
        arrows: {
            prev: '#anterior1',
            next: '#siguente1'
        }
    });

    new Glider(document.querySelector('#carousel2'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot2',
        draggable: true,
        arrows: {
            prev: '#anterior2',
            next: '#siguente2'
        }
    });

    new Glider(document.querySelector('#carousel3'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot3',
        draggable: true,
        arrows: {
            prev: '#anterior3',
            next: '#siguente3'
        }
    });

    new Glider(document.querySelector('#carousel4'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot4',
        draggable: true,
        arrows: {
            prev: '#anterior4',
            next: '#siguente4'
        }
    });

    new Glider(document.querySelector('#carousel5'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot5',
        draggable: true,
        arrows: {
            prev: '#anterior5',
            next: '#siguente5'
        }
    });

    // Primera cita / evento 6

    new Glider(document.querySelector('#carousel6'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot6',
        draggable: true,
        arrows: {
            prev: '#anterior6',
            next: '#siguente6'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1024,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    });

    // Segunda cita / evento 7

    new Glider(document.querySelector('#carousel7'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot7',
        draggable: true,
        arrows: {
            prev: '#anterior7',
            next: '#siguente7'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1024,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    });

    // Tercera cita / evento 8

    new Glider(document.querySelector('#carousel8'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot8',
        draggable: true,
        arrows: {
            prev: '#anterior8',
            next: '#siguente8'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1024,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
          ]
    });

    // cuarta cita / evento 9

    new Glider(document.querySelector('#carousel9'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dot9',
        draggable: true,
        arrows: {
            prev: '#anterior9',
            next: '#siguente9'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1024,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    });

    // 
});

/* var sliders = document.querySelectorAll('.carousel__lista');
// intento de automatizar el gilder: fallido:

// https://github.com/glidejs/glide/issues/202#issuecomment-382632126


for (var i = 1; i < sliders.length + 1; i++) {
  var glide = new Glide(sliders[i], {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    draggable: false,
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguente'
    }
  });
  
  glide.mount();
} */

// intento 2
/* var sliders = document.querySelectorAll('.carousel__lista');
for (var i = 0; i < sliders.length; i++) {
    var sliders[i] = new Glider(document.querySelector(`'#carousel${i}'`), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: `'#dot${i}'`,
        draggable: false,
        arrows: {
            prev: `'#anterior${i}'`,
            next: `'#siguente${i}'`
        }
    });
    
    sliders[i].mount();
}
 */


/* var y = 1;
var z = 1;
window.addEventListener('load', function() {
    for (i = 1; i < glider_list.length + 1; i++) {
        console.log(i);
        console.log(y);
        console.log(z);
        var y = new Glider(document.querySelector(`'#carousel${i}'`), {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: `'#dot${i}'`,
            draggable: false,
            arrows: {
                prev: `'#anterior${i}'`,
                next: `'#siguente${i}'`
            }
        });
    }
}) */


// glider_list.forEach((carousel) => {

//     var i = 1;
//     var num = glider_list.length

//     console.log(count);

//     var glider_item = new Glider(document.getElementById(`'glider${i}'`), {
//         slidesToShow: 1,
//         dots: `'#dot${i}'`,
//       });
      
//       glider.setOption({
//         arrows: {
//           prev: `'#anterior${i}'`,
//           next: `'#siguente${i}'`
//         }
//       });
//       i += 1;
//       console.log(i);
//       glider_item.refresh(true);
// });