import { Schema } from 'mongoose';

const IntermediarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  range: {
    type: Object,
  },
  dropdown: {
    type: Object,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default IntermediarySchema;
