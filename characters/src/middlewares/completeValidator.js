import filmsValidator from './filmsValidator.js'
import characterValitador from './characterValidation.js'
import homeworldValidator from './homeworldValidation.js'
export default async (req,res,next) => {
    let validator = {}
    validator.name = await characterValitador(req,res, validator)
    validator = await homeworldValidator(req,res)
    validator = await filmsValidator(req,res)
    next()
}