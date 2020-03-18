//

const lugar = require('./Lugar/lugar');
const Clima = require('./Clima/Clima');


const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Diereccion de la ciudad para obtener el clima'
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion) // promesa
    .then(console.log);*/

/*Clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log)*/


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await Clima.getClima(coords.lat, coords.lng);
        return ` El Clima de ${coords.direccion} es de ${temp}. `;
    } catch (e) {
        return ` No se pudo determinar el clima de ${direccion} `;
    }




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);