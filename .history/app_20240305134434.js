const express = require ('express')
const shortid = require ('shortid')
const createHttpError = require('http-errors')
const mongoose = require('mongoose')
const path = require('path')


const app = express()




app.listen (3000, () => console.log('port number is 3000'))