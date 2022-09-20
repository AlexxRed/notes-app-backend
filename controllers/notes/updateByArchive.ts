import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const updateByArchive = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { archive } = req.body;
    const result = await Note.findByIdAndUpdate(
        id,
        { archive },
        { new: true }
    );
    res.json(result);
};

