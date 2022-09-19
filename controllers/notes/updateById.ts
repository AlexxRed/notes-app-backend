import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await Note.findByIdAndUpdate(id, req.body,{ new: true })
    res.json(result)
}
