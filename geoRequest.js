const req=require('postman-request')


const requestPlaceName=(place_name,callback)=>{
const urlg="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(place_name)+".json?access_token=pk.eyJ1IjoicGF2YW5hZXR1cmkiLCJhIjoiY2tqZWp5ejluOGlpMzMxcWo0c2ZuYWJ4ayJ9.q05y1jsdilGKpVL8OjHFQA&limit=1"

req(urlg,{json:true},(error, {body}={})=>{
    if(error)
        {
            callback("Unable to connect",undefined);
        }
    else if(body.features.length==0)
        {
            callback("Invalid adress name",undefined);
        }
    else 
    {
       
        callback(undefined,
                    { latitude:body.features[0].center[1],
                      longitude:body.features[0].center[0],
                      location: body.features[0].place_name
                    }
                );
    }
});

}

module.exports=requestPlaceName;