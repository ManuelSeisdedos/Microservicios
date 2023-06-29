'use strict'

import server from './src/server.js'

const PORT = process.env.PORTF || 8003;

server.listen(PORT, () => {
    console.log(`Planets service listening on port ${PORT}`)
})