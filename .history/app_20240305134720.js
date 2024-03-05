const express = require ('express')
const shortid = require ('shortid')
const createHttpError = require('http-errors')
const mongoose = require('mongoose')
const path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.join())
app.use(express.urlencoded({extended: falsealse}))



app.listen (3000, () => console.log('port number is 3000'))