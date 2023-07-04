import express from 'express';
import morgan from 'morgan';
const server = express();   

server.use(express.json())
server.use(morgan('dev'))


export default server;