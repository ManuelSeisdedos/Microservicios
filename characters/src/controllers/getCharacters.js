import Character from '../data/index.js'
import utils from '../utils/index.js'
import axios from 'axios'

export default  async (req,res) => {
    const characters = await axios.get("http://database:8004/Characters")
    console.log(characters)
    utils.response(res,200,characters.data)
}