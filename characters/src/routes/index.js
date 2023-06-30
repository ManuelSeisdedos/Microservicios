'use strict'

import {Router} from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';

const router = Router();
console.log("LLEGA")
router.get('/', controllers.getCharacters)
router.post('/', middlewares.characterValidation, controllers.createCharacter)



export default router