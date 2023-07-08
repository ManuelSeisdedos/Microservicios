'use strict'

import {Router} from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';
const router = Router();

router.get('/', controllers.getPlanets)
router.get('/:planet', controllers.getOnePlanet)
router.post('/', middlewares.planetValidation, controllers.createPlanets)



export default router