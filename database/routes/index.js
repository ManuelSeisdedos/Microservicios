import Router from 'express';
import models from '../database/index.js'
import validateModel from '../database/middlewares/validateModel.js';
const router = Router();

router.get('/:model', validateModel, async (req,res) => {
    const {model} = req.params
    const response = await models[model].list()
    res.status(200).json(response)
})

router.get('/:model/:_id', validateModel, async (req,res) => {
    const {model, _id} = req.params
    const response = await models[model].get(_id)
    res.status(200).json(response)
})

router.post('/:model', validateModel, async (req,res) => {
    const {model} = req.params;
    const object = req.body
    console.log(req.body)
    const response = await models[model].insert(object)
    res.status(200).json(response);
})

export default router