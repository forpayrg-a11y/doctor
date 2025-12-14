// app/api/submit-form/route.js
import dbConnect from '@/lib/dbConnect';
import FormSubmission from '@/models/FormSubmission';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();

    // Extract form data
    const formData = {
      formId: data.formId, // Make sure to include formId in your form submission
      email: data.email,
      formData: {
        name: data.name,
        email: data.email,
        message: data.message,
        ...data // Include all other form fields
      }
    };

    // Check if submission exists and update or create
    const submission = await FormSubmission.findOneAndUpdate(
      { formId: formData.formId, email: formData.email },
      formData,
      { new: true, upsert: true, runValidators: true }
    );

    return new Response(JSON.stringify({
      success: true,
      data: submission
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to process form submission"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}