
import utils from '../utils/index.js'
import axios from 'axios'

export default  async (req,res) => {
    const {character} = req.params
    const characters = await axios.get(`http://database:8004/Characters/${character}`)
    console.log(characters)
    utils.response(res,200,characters.data)
}