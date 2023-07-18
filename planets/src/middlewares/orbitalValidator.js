import ClientError from '../utils/errors/index.js'

export default (req,res,validator) => {
    const {orbital} = req.body

    if (orbital) {
        validator.orbital = orbital
        return validator
    } else { 
        throw new ClientError ('Error en la orbita', 401)
    }
}