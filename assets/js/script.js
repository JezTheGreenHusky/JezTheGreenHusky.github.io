const grid = new Muuri('.grid', {
    dragEnabled: true,
	layout: {
        rounding: false,
    }
});

const randomChoice = (min, max) => {
	return Math.random() * (max - min) + min;
}

window.addEventListener('load', () => {

	let smooth = (barra) => {
		document.querySelector(barra).addEventListener("click", (e) => {
			let link = e.target;
			console.log(link)
	
			e.preventDefault();
			const href = link.getAttribute("href");
			const offsetTop = document.querySelector(href).offsetTop;
			
			scroll({
				top: offsetTop -95,
				behavior: "smooth"
			});
		});
	}

	smooth(".barra__navegacion")
	smooth(".nav_busqueda")

	

	// fade in out del hero

	let hero_text = document.querySelectorAll(".hero__fade");

	const opciones = [
		"Desarrollador FullStack",
		"Diseños Responsivos",
		"JavaScript",
		"PostgreSQL",
		"NodeJS",
		"Desarrollo de APIs",
		"Webs Interactivas",
		"Desarrollo Frontend"
	]

    // transition del css en 2s
    let loop = (t) => {
        hero_text.forEach((text, index) => {
            setTimeout(() => {
                text.classList.remove("fadeOut");
                text.classList.add("fadeIn");
            }, t * 3000);
    
            t += 2;
    
            setTimeout(() => {
                text.classList.remove("fadeIn");
                text.classList.add("fadeOut");

				setTimeout(() => {
					let random = parseInt(randomChoice(0, opciones.length));
					// console.log(random)
					text.innerHTML = opciones[random]
				}, 1500)

            }, t * 3000);

            t++

            if(index == hero_text.length - 1 && t < 200){
                loop(t)
            }
        })
    }

	// MUURI

	grid.refreshItems();
	grid.refreshItems().layout();

	document.getElementById('grid').classList.add('imagenes-cargadas');


	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
            // primero remover la clase "activo" de todos los enlaces
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            // Luego agregar la clase "activo", cuando se haga click
			evento.target.classList.add('activo');

            // obterer la categoria clickeada para el filtrado
			const categoria = evento.target.innerHTML.toLowerCase();
            // utilizar el metodo de mmauui: grid.filter
            // https://github.com/haltu/muuri#grid-method-filter

            // si categoria == todos: muestra todos (porque todos tienen el atributo data-categoria)
            // si categoria != todos: filtra la categoria clickeada
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

    // Agregamos los listener de los enlaces para filtrar por etiqueta.
	const enlaces_e = document.querySelectorAll('#etiquetas_lista a span');
	enlaces_e.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			//evento.preventDefault();
			// obterer la categoria clickeada para el filtrado
			const etiqueta = evento.target.innerHTML.toLowerCase();
			console.log(etiqueta)
            // console.log(etiqueta)
            // utilizar el metodo de mmauui: grid.filter
            // https://github.com/haltu/muuri#grid-method-filter

            grid.filter( (item) => item.getElement().dataset.etiquetas.includes(etiqueta) );
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        // obtener el input y ponerlo en una variable
		const busqueda = evento.target.value.toLowerCase();
        // filtrar por elemento escrito (input)
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});


	// uso del loop
	loop(0);
	
});
