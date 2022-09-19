import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const updateFavorite = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { favorite } = req.body;
    const result = await Note.findByIdAndUpdate(
        id,
        { favorite },
        { new: true }
    );
    res.json(result);
};

