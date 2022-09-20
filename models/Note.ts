import { Schema, model } from 'mongoose';
import { INote } from '../types/note.type';

const noteSchema = new Schema<INote>(
  {
        id: {
          type: String,
        },
        name: {
          type: String,
          required: [true, 'Set name for note'],
        },
        content: {
          type: String,
          required: [true, 'Set description for note']
        },
        category: {
          type: String,
          required: true
        },
        created: {
          type: String,
        },
        dates: {
          type: String,
        },
        archive: {
          type: Boolean,
        },
    },
    { versionKey: false, timestamps: true },
);

const Note = model('note', noteSchema);

export default Note;

