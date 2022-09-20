import Note from '../../models/Note';
import { Request, Response, NextFunction } from 'express';

export const getStats = async (req: Request, res: Response, next: NextFunction) => {
        const resultIdea = await Note.find({ category: "Idea", archive: false })
        const resultIdeaArchive = await Note.find({ category: "Idea", archive: true })
        const resultTask = await Note.find({ category: "Task", archive: false })
        const resultTaskArchive = await Note.find({ category: "Task", archive: true })
        const resultThought = await Note.find({ category: "Random Thought", archive: false })
        const resultThoughtArchive = await Note.find({ category: "Random Thought", archive: true })

        const result = [{
                category: 'Idea',
                active: resultIdea,
                archived: resultIdeaArchive,
                activeNumber: resultIdea.length,
                archivedNumber: resultIdeaArchive.length
                },
                {
                category: 'Task',
                active: resultTask,
                archived: resultTaskArchive,
                activeNumber: resultTask.length,
                archivedNumber: resultTaskArchive.length
                },
                {
                category: 'Random Thought',
                active: resultThought,
                archived: resultThoughtArchive,
                activeNumber: resultThought.length,
                archivedNumber: resultThoughtArchive.length
                }
        ]
        res.json(result)
}
