import { useState } from "react";
import ClientForm from "../../components/Form/ClientForm";

const NewClient = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const initialValues = {
    businessName: '',
    businessDetails: '',
    businessAddress: '',
    businessWhatsappNumber: '',
    businessEmailAddress: '',
    targetRegion: '',
    businessType: '',
    listdown: '',
    businessWebsite: '',
    contactPerson: '',
    brandKeyPoints: '',
    brandGuidelinesLink: '',
    goalsObjectives: '',
    brandGuidelinesNotes: '',
    ugcDriveLink: '',
    additionalNotes: '',
  };

  const handleFormSubmit = async (values) => {
    try {
      // Simulate API call
      console.log('Form submitted with values:', values);
      setSuccessMessage('Client successfully created!');
      setErrorMessage(null); // Clear error message
    } catch {
      setErrorMessage('Failed to create client. Please try again.');
      setSuccessMessage(null); // Clear success message
    }
  };

  return (
    <div className="section">
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <ClientForm initialValues={initialValues} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default NewClient;
