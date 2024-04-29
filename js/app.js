//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor de resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar objeto de la busqueda
const datosBusqueda = {
	marca: '',
	year: '',
	minimo: '',
	maximo: '',
	puertas: '',
	transmision: '',
	color: '',
};
document.addEventListener('DOMContentLoaded', () => {
	mostrarAutos();

	//Llena las opciones de años
	llenarSelect();
});

function listenerSelect(referencia) {
	referencia.addEventListener('change', (e) => {
		datosBusqueda[e.target.id] = e.target.value;
		console.log(datosBusqueda);
	});
}

listenerSelect(marca, 'marca');
listenerSelect(year, 'year');
listenerSelect(minimo, 'minimo');
listenerSelect(maximo, 'maximo');
listenerSelect(puertas, 'puertas');
listenerSelect(transmision, 'transmision');
listenerSelect(color, 'color');
// //EventListener para los select de busqueda
// marca.addEventListener('change', (e) => {
// 	datosBusqueda.marca = e.target.value;
// });

function mostrarAutos() {
	autos.forEach((auto) => {
		const { marca, modelo, year, puertas, transmision, precio, color } = auto;
		const autoHTML = document.createElement('p');
		autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - ${precio}`;

		resultado.appendChild(autoHTML);
	});
}

//Genera los años del select
function llenarSelect() {
	for (let i = max; i >= min; i--) {
		const opcion = document.createElement('option');
		opcion.value = i;
		opcion.textContent = i;
		year.appendChild(opcion);
	}
}
