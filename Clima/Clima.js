//

const axios = require('axios');

const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7e5ca55884354f6f5cbd32a92a92f562&inits=simetrico`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}