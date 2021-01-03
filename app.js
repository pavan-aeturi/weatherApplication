
const requestWeather=require('./weatherRequest.js')
const requestgeoLocation=require('./geoRequest.js')
const express=require('express')

const app=express()
const port=3000

app.get('',(req,res)=>{

    if(!req.query.address)
    {
        return res.send({
            error: "Pls fill the adress required in URI"
        })
    }
    requestgeoLocation(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error)
            return res.send({
                error
            })
        else
        { 
            requestWeather(latitude, longitude,(error,data)=>{
                if(error)
                    return res.send({
                        error
                    })
                else
                return res.send({
                    data,
                    location
                })
            } )

        }
    })

    
})


app.listen(port, () => {
    console.log(`Weather api listening at http://localhost:${port}`)
  })