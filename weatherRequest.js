
const req=require("postman-request")


const requestWeather =(latitude,longitude,callback)=>{

const urlw="http://api.weatherstack.com/current?access_key=d423dc8cd58186a9dc20ad50816bd312&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"&units=m"

req({url:urlw,json:true}, function (error, response, body) {

    if(error)
        callback("Unable to connect",undefined)
    else if(response.body.error)
        callback("Invalid input",undefined)
    else
        callback(undefined,
            response.body.current.weather_descriptions[0] +" and it's "+response.body.current.temperature + " but feels like "+response.body.current.feelslike)
    
});

}

module.exports=requestWeather;