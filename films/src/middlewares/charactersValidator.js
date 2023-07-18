import axios from 'axios'

export default async (req,res,validator) => {
    const {characters} = req.body

    let promesas = []
    for (let index = 0; index < films.length; index++) {
    promesas.push(axios.get(`http://localhost:8004/Characters/${index}`))
    }
    const value = await Promise.all(promesas)
    for (let index = 0; index < array.length; index++) {
        if(value.data[i]) {
            validator.characters = characters
        } else {
            throw new ClientError("Error en los personajes.", 401)
        }
        
    }
    return validator

}

