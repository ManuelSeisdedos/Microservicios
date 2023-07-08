import getCharacters from './getCharacters.js'
import createCharacter from './createCharacter.js'
import catchAsync from '../utils/catchAsync.js'
import getOneCharacter from './getOneCharacter.js'

export default  {
    getOneCharacter: catchAsync(getOneCharacter),
    getCharacters :catchAsync(getCharacters),
    createCharacter :catchAsync(createCharacter)
}