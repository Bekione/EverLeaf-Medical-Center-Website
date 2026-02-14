
/**
 * Simulates a backend API call to an email service like Resend.
 * In a real full-stack application, this would fetch() to your backend API endpoint.
 */
export const submitForm = async (
  data: Record<string, any>, 
  formType: 'appointment' | 'contact' | 'newsletter'
): Promise<{ success: boolean; message?: string }> => {
  // 1. Log the data that would be sent to Resend
  console.group(`🚀 [Form Submission: ${formType}]`);
  console.log('Payload:', data);
  console.groupEnd();

  // 2. Simulate network latency (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 3. Simulate random server error (1% chance) for robustness testing
  const randomError = Math.random() < 0.01;
  
  if (randomError) {
    throw new Error("Something went wrong on the server. Please try again.");
  }

  // 4. Return success
  return { success: true };
};
