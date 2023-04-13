const request = require('request')
var capitalize = require('capitalize')


const stockAddress = (symbol, callback) => {
    const urlV3 = 'https://api.polygon.io/v3/reference/tickers/' + symbol + '?apiKey=[API_KEY]'
    request({url: urlV3, json: true }, (error, { body }) => {
        if (body.results.type !== "CS") {
            callback(undefined ,{   
                companyName: body.results.name,
                addressLine: "N/A", 
                city: "",
                state: "",
                zip: ""})
        }
        else {
        callback(undefined, {   
            companyName: body.results.name,
            addressLine: capitalize.words(body.results.address.address1), 
            city: capitalize.words(body.results.address.city),
            state: body.results.address.state,
            zip: body.results.address.postal_code})
        }
            
    })
} 

const stock = (symbol, callback) => {
    symbol = symbol.toUpperCase()
    const url = 'https://api.polygon.io/v2/aggs/ticker/' + symbol + '/prev?adjusted=true&sort=asc&limit=120&apiKey=[API_KEY]'

    request({url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cant connect to stock service. Please try again later', undefined)
        } 
        else if (body.resultsCount === 0) {
            callback("Unable to find stock. Please verify you are entering the correct ticker.", undefined)
        } 
        else {
            stockAddress(symbol, (error, { companyName, addressLine, city, state, zip}) => {
                if (error) {
                    callback("The symbol you searched for is not a stock. Please verify the type of investment you are entering", undefined)
                }
                else {
                callback(undefined, {
                    companyNameData: companyName,
                    addressData: addressLine, 
                    cityData: city,
                    stateData: state,
                    zipData: zip,
                    closingPriceData: body.results[0].c
                })
                }
            })
        }
    })
}
module.exports = stock
