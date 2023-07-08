import utils from '../utils/index.js'
import axios from 'axios'

export default  async (req,res) => {
    const {film} = req.params
    console.log(film)
    const films = await axios.get(`http://localhost:8004/Films/${film}`)
    utils.response(res,200, films.data)
}