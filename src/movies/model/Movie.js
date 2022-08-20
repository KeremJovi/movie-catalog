import { Schema, model } from 'mongoose';

const MovieSchema = new Schema({
  title: String,
  description: String,
  director: String,
  producer: String,
  image: String,
});

export default model('Movie', MovieSchema);
