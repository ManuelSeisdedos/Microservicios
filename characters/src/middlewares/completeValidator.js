import filmsValidator from './filmsValidator.js'
import characterValitador from './characterValidation.js'
import homeworldValidator from './homeworldValidation.js'
export default async (req,res,next) => {
    let validator = {}
    validator.name = await characterValitador(req,res, validator)
    validator.homeworld = await homeworldValidator(req,res)
    console.log(validator)
    validator = await filmsValidator(req,res)
    next()
}