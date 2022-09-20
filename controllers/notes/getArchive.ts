import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const getArchive = async (req: Request, res: Response, next: NextFunction) => {
        const result = await Note.find({archive:true})
        res.json(result)
}