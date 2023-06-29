import getCharacters from './getCharacters.js'
import createCharacter from './createCharacter.js'
import catchAsync from '../utils/catchAsync.js'
export default  {
    getCharacters :catchAsync(getCharacters),
    createCharacter :catchAsync(createCharacter)
}