import { Schema, model } from 'mongoose';
import { INote } from '../types/note.type';

const noteSchema = new Schema(
    {
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
        owner: {
          type: Schema.Types.ObjectId,
          ref: 'user',
      }
    },
    { versionKey: false, timestamps: true },
);

const Note = model('note', noteSchema);

export default Note;

