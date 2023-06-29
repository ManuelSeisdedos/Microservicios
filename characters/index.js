import server from './src/server.js'

const PORT = process.env.PORTCHAR || 8001;

server.listen(PORT, () => {
    console.log(`Characters service listening on port ${PORT}`)
})