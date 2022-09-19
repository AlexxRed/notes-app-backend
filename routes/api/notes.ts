import ctrlWrapper  from '../../middlewares/ctrlWrapper';
import { add, remove, getAll, getById, updateById } from '../../controllers/notes';
import { Router } from 'express';
// const { validation } = require('../../middlewares/validation')




const notesRouter: Router = Router();

// notesRouter.get('/', ctrlWrapper(ctrl.getAll))

// notesRouter.get('/:id', ctrl.getById)

notesRouter.post('/',  ctrlWrapper(add))

// notesRouter.delete('/:id', ctrlWrapper(ctrl.remove))

// notesRouter.put('/:id', ctrlWrapper(ctrl.updateById))

// notesRouter.get('/statats', ctrl.getStats)

// notesRouter.patch('/:contactId/favorite', ctrlWrapper(ctrl.updateByFavorite))

export default notesRouter
