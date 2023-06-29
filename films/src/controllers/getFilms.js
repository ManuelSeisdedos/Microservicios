import Films from '../data/index.js'

export default  async (req,res) => {
    const characters = await Films.list()
    res.status(200).json(characters)
}