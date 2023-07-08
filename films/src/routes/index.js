'use strict'

import {Router} from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';
const router = Router();

router.get('/', controllers.getFilms)
router.get('/:film', controllers.getOneFilm)
router.post('/', middlewares.filmValidator, controllers.createFilms)



export default router