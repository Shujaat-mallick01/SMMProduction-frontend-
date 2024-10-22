import { useState } from "react";
import ClientForm from "../../components/Form/ClientForm";
// import { useCreateClientMutation } from "../../services/api/clientApiSlice";
// import { convertToSnakeCase } from '../../utils/generalUtils'

const NewClient = () => {
  // const [createClient] = useCreateClientMutation();
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
  }

  // const handleSubmit = async (values) => {
  //   const formattedValues = convertToSnakeCase(values);
  //   try {
  //     await createClient(formattedValues).unwrap(); // Unwrap the response to handle any errors
  //     setSuccessMessage('Client created successfully!');
  //     setErrorMessage(null);
  //   } catch (error) {
  //     const message = error?.data?.message || 'Failed to create client. Please try again.';
  //     setErrorMessage(message);
  //     setSuccessMessage(null);
  //   }
  // };

  return (
    <div className="section">
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <ClientForm initialValues={initialValues} />    </div>
  );
};

export default NewClient;
