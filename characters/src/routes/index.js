'use strict'

import {Router} from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';

const router = Router();

router.get('/', controllers.getCharacters)
router.get('/:character', controllers.getOneCharacter)
router.post('/',middlewares.completeValidator, controllers.createCharacter)



export default router