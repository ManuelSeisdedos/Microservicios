import Character from '../data/index.js'
import utils from '../utils/index.js'

export default  async (req,res) => {
    const characters = await Character.list()
    utils.response(res,200,characters)
}