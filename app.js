const request = require("request")
const forecast = require("./forecast.js")
const geocode = require("./geocode.js")

const country = process.argv[2]
 
geocode ( country ,(error,data) => {
    console.log("Error : ", error)
    console.log("Data : ",data)

    forecast (data.longitude, data.latitude ,  (error,data) => {
    console.log("Error : " + error )
    console.log("Data : " + data)
    })
})