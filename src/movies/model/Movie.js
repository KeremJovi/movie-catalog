import { Schema, model } from 'mongoose';

const MovieSchema = new Schema({
  title: String,
  description: String,
  director: String,
  producer: String,
  img: String,
});

export default model('Movie', MovieSchema);
