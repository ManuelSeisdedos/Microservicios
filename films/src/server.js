'use strict'

import express from "express"
import morgan from 'morgan'
import router from "./routes/index.js";

const server = express();

server.use(morgan('dev'))
server.use(express.json())
server.use('/films', router)

server.use("*", (req,res) => {
    res.status(404).send("Not Found")
})

server.use((err, req, res, next)=> {
res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
})
})


export default server