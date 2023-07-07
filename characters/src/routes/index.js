'use strict'

import {Router} from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';

const router = Router();

router.post('/',middlewares.characterValidation, controllers.createCharacter)
router.get('/', controllers.getCharacters)



export default router