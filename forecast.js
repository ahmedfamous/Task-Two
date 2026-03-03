const request = require ('request')

const forecast = (longitude , latitude , call ) => {

const url = "http://api.weatherapi.com/v1/current.json?key=5b4f4d4e9be54ae3a4b51430261502&q=" + longitude + "," + latitude

request ({url ,json : true}, (error , Response) => {

    if (error) {
        call("I cannot access the website you are looking for.", undefined)
    } else if (Response.body.error) {
        call(Response.body.error.message, undefined)
    } else {
        call(undefined, Response.body.location.name + "it is : " + Response.body.current.condition.text + "  and temp is : " + Response.body.current.temp_c)
    }

})

}

module.exports = forecast