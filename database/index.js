import server from './src/server.js'

const PORT = process.env.PORT || 8004


server.listen(PORT, () => 
    console.log('Server listening on port ', PORT))