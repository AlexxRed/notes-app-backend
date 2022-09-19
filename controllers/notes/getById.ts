import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';


export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const result = await Note.findById(id)
    res.json(result)
}
