import mongoose, { Schema, Document } from 'mongoose';

export interface IImage extends Document {
  filename: string;
  path: string;
}

const imageSchema = new Schema({
  filename: String,
  path: String,
});

export const Image = mongoose.model<IImage>('Image', imageSchema);
