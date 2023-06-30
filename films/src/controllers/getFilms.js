import utils from '../utils/index.js'
import Films from '../data/index.js'

export default  async (req,res) => {
    const films = await Films.list()
    console.log(utils)
    utils.response(res,200, films)
}