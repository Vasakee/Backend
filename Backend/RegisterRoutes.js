const RegisterRoutes = require('express').Router()
const { registerCitizen, getCitizens, getCitizen } = require('./RegisterController')

RegisterRoutes.post('/', (registerCitizen))
RegisterRoutes.get('/', (getCitizens))
RegisterRoutes.get('/:citizenId', (getCitizen))

module.exports = RegisterRoutes