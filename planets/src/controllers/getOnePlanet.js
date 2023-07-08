import axios from 'axios'
import utils from '../utils/index.js'

export default  async (req,res) => {
    const {planet} = req.params
    const planets = await axios.get(`http://localhost:8004/Planets/${planet}`)
    utils.response(res,200,planets.data)
}