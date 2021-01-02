
const requestWeather=require('./weatherRequest.js')
const requestgeoLocation=require('./geoRequest.js')

if(process.argv.length === 2)
    console.log("pls provide input as argument")
else
   { 
    
    requestgeoLocation(process.argv[2],(error,{latitude,longitude,location}={})=>{
        if(error)
            console.log(error)
        else
        { 
            requestWeather(latitude, longitude,(error,data)=>{
                if(error)
                    console.log(error);
                else
                    {   
                        console.log(location);
                        console.log(data);
                    }
            } )

        }
    })
}

