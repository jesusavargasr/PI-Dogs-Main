const { Router } = require('express');
const {
    getDogsHandler,
    getDogByNameHandler,
    getDogByIdHandler,
    postDogHandler,
}=require('../handlers/dogHandler');

const dogRouter = Router();

dogRouter.get('/', getDogsHandler);
dogRouter.get('/search', getDogByNameHandler);
dogRouter.get('/:id', getDogByIdHandler);
dogRouter.post('/post', postDogHandler);
module.exports = dogRouter;