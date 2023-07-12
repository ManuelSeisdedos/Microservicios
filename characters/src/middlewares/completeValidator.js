
import characterValitador from './characterValidation.js'
import homeworldValidator from './homeworldValidation.js'
export default async (req,res,next) => {
    let validator = {}

    validator = characterValitador(req,res,next,validator)
    validator = homeworldValidator(req,res,next,validator)

    return validator
}