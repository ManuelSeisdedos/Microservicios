import films from './films.json' assert {type: "json"}

const list = async () => {
    return films
}

const create = async () => {
    throw Error ("Hubo un error al crear el personaje")
}

export default  {
    list,
    create
}