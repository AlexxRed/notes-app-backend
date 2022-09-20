import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const remove = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params
        const result = await Note.findByIdAndRemove(id)
        res.json({
                message: "contact deleted",
                result
        })
}
