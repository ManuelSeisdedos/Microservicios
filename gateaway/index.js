'use strict'

import server from './src/server.js'

const PORT = process.env.PORTGATEAWAY || 8000;

server.listen(PORT, () => {
    console.log(`Gateaway service listening on port ${PORT}`)
})