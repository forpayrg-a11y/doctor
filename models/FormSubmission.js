import mongoose from 'mongoose';

const formSubmissionSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  formData: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a compound index for formId and email
formSubmissionSchema.index({ formId: 1, email: 1 }, { unique: true });

const FormSubmission = mongoose.models.FormSubmission || 
  mongoose.model('FormSubmission', formSubmissionSchema);

export default FormSubmission;
