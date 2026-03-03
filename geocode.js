const request = require ("request")
const geocode = (address , call) => {

const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

request ({url : geocodeUrl , json : true} ,(error,Response) => {
    if (error) {
        call("Low level I can't access this webpage",undefined)
    } else if(Response.body.message) {
        call(Response.body.message,undefined)
    } else if(Response.body.features.length == 0 ) { 
        call("Cannot find location",undefined)
    }
    else {
        call(undefined, {
            longitude : Response.body.features[0].center[0],
            latitude : Response.body.features[0].center[1]
        })
        
    }
    
})
}

module.exports = geocode
