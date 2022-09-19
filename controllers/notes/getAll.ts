import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
        const result = await Note.find()
        res.json(result)
}



