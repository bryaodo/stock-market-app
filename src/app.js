const path = require('path')
const express = require('express')
const hbs = require('hbs')
const stock = require('./stocks')



const app = express()

//defines paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")


//setup habdlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup directory to save
app.use(express.static(publicDirectoryPath))

const name = 'Bryan O\'Donoghue'

app.get('', (req, res) => {
    res.render('index', {
        title:'Stock Market App',
        name: name,
        tlName: 'Nick Pappas'
    })
})

app.get('/stock', (req, res) => {
    if (!req.query.ticker) {
        return res.send({
            error: 'You must enter a stock ticker!'
        })
    }
    stock(req.query.ticker, (error, data) => {

        if (error) {
            return res.send({ error })
        }
        res.send({
        ticker: req.query.ticker.toUpperCase(),
        companyName: data.companyNameData,
        addressLine: data.addressData, 
        city: data.cityData,
        state: data.stateData,
        zip: data.zipData,
        closingPrice: data.closingPriceData   
        })
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title:'Contact',
        name: name,
        tlName: 'Dan Snow'
    })
})

app.get('/recommendations', (req, res) => {
    res.render('recommendations', {
        title:'Our Recommendations',
        name: name,
        tlName: 'Eric Seeman'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        name: name,
        tlName: 'no one!',
        errorMessage: 'Page not found!'
    })
})

app.listen(3002, () => {
    console.log('server is up on port 3002')
})   