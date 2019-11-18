const express = require('express')
const router = express.Router()
const request= require('request')

const City = require('../models/City')

const myKey= "3e10524c70194594b0181927191104" 

router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName
    request(` http://api.apixu.com/v1/current.json?key=3e10524c70194594b0181927191104&q=${cityName}`, function (err, response){
    let data=JSON.parse(response.body)

    let infoCity= new City( {
        name: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        conditionPic: data.current.condition.icon
    })
    res.send(infoCity)
    console.log(infoCity)
    })
})

router.get('/cities',function(req,res){
    City.find({},function(err,cities){
        res.send(cities)
    })
})

router.post('/city', function (req,res){
    let body= req.body
    let c1 = new City(body)
    c1.save()
    res.end()
})

router.delete('/city/:cityName', function(req,res){
    let cityName= req.params.cityName
    City.remove({name:cityName}).exec()
})

module.exports = router
