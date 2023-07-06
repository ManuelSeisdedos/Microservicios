import utils from '../utils/index.js'
import axios from 'axios'

export default  async (req,res) => {
    const films = await axios.get("http://database:8004/Films")
    utils.response(res,200, films.data)
}