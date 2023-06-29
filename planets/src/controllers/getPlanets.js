import Planets from '../data/index.js'
import utils from '../utils/index.js'

export default  async (req,res) => {
    const planets = await Planets.list()
    utils.response(res,200,planets )
}