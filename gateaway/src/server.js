'use strict'

import express from 'express'
import morgan from 'morgan'
import routerCharacters from '../../characters/src/server.js'
import routerFilms from '../../planets/src/server.js'
import routerPlanets from '../../films/src/server.js'

const server = express()


server.use(morgan('dev'))
server.use(express.json())

server.use('/characters', routerCharacters)
server.use('/films', routerFilms)
server.use('/planets', routerPlanets)

export default server;