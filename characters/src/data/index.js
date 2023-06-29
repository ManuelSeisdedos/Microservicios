import character from './characters.json' assert {type: "json"}

const list = async () => {
    return character
}

const create = async () => {
    throw Error ("Hubo un error al crear el personaje")
}

export default  {
    list,
    create
}