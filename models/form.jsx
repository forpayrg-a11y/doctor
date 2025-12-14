import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  fields: [
    {
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
        enum: ['text', 'number', 'email', 'date', 'checkbox', 'radio', 'select'],
      },
      required: {
        type: Boolean,
        default: false,
      },
      options: [
        {
          type: String,
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;        