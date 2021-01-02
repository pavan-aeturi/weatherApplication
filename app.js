
const requestWeather=require('./weatherRequest.js')
const requestgeoLocation=require('./geoRequest.js')

if(process.argv.length === 2)
    console.log("pls provide input as argument")
else
   { 
    
    requestgeoLocation(process.argv[2],(error,response)=>{
        if(error)
            console.log(error)
        else
        { 
            requestWeather(response.latitude, response.longitude,(error,data)=>{
                if(error)
                    console.log(error);
                else
                    {   
                        console.log(response.location);
                        console.log(data);
                    }
            } )

        }
    })
}

