'use strict'

import express from 'express'
import morgan from 'morgan'
import proxy from 'http-proxy-middleware'
const server = express()


server.use(morgan('dev'))
server.use(express.json())

server.use("/characters", proxy.createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true
}))

server.use("/films", proxy.createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true
}))
server.use("/planets", proxy.createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true
}))

export default server;