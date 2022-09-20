import ctrlWrapper from '../../middlewares/ctrlWrapper';
import validation from '../../middlewares/validation';
import { JoiNoteCreationSchema } from '../../helpers/joiValidation/JoiNoteCreationSchema';
import {
    add,
    remove,
    getAll,
    getById,
    updateById,
    getStats,
    updateByArchive,
    getArchive
} from '../../controllers/notes';
import { Router } from 'express';





const notesRouter: Router = Router();

notesRouter.get('/', ctrlWrapper(getAll))
notesRouter.get('/archive', ctrlWrapper(getArchive))
notesRouter.get('/stats', ctrlWrapper(getStats))

notesRouter.get('/:id', ctrlWrapper(getById))

notesRouter.post('/',  validation(JoiNoteCreationSchema), ctrlWrapper(add))

notesRouter.delete('/:id', ctrlWrapper(remove))

notesRouter.put('/:id', ctrlWrapper(updateById))

notesRouter.patch('/:id/archive', ctrlWrapper(updateByArchive))

export default notesRouter
