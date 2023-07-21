import filmsValidator from './filmsValidator.js'
import characterValitador from './characterValidation.js'
import homeworldValidator from './homeworldValidation.js'
import ClientError from '../utils/errors/index.js'
export default async (req,res,next) => {
    let validator = {}
    validator.name = await characterValitador(req,res, validator)
    validator.homeworld = await homeworldValidator(req,res)
    validator.films = await filmsValidator(req,res)
    if (
        validator.name !== null &&
        validator.homeworld !== null &&
        validator.films !== null
    ) {
        next()
    } else {
        
        throw new ClientError ("Error en la creacion del personaje", 401 )
    }
}