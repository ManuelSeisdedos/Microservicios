'use strict'

import server from './src/server.js'

const PORT = process.env.PORTF || 8002;

server.listen(PORT, () => {
    console.log(`Films service listening on port  ${PORT}`)
})