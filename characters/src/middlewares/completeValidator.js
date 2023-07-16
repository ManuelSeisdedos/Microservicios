import filmsValidator from './filmsValidator.js'
import characterValitador from './characterValidation.js'
import homeworldValidator from './homeworldValidation.js'
export default async (req,res,next) => {
    let validator = {}
    validator = characterValitador(req,res,validator)
    validator = homeworldValidator(req,res,validator)
    validator = filmsValidator(req,res, validator)
    return validator
}