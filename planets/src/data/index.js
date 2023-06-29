import planets from './planets.json' assert {type: "json"}

const list = async () => {
    return planets
}


const create = async () => {
    throw Error ("Hubo un error al crear el personaje")
}

export default  {
    list,
    create
}