import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const result = await Note.create({...req.body})
    res.status(201).json(result)
}
