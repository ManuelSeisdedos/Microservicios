import Planets from '../data/index.js'

export default  async (req,res) => {
    const characters = await Planets.list()
    res.status(200).json(characters)
}