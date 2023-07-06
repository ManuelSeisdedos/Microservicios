import axios from 'axios'
import utils from '../utils/index.js'

export default  async (req,res) => {
    const planets = await axios.get("http://database:8004/Planets")
    utils.response(res,200,planets.data)
}