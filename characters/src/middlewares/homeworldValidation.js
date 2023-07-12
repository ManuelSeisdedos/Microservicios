import ClientError from "../utils/errors/index.js"
import axios from 'axios'
export default async (req,res,next,validator) => {
    const {homeworld} = req.body
    const value = await axios.get(`http://localhost:8004/Planets/${homeworld}`)
    
    if (value.data._id) {
        validator.homeworld = homeworld
        return validator
    } else { 
       validator.homeworld = null
       return validator
    }
}