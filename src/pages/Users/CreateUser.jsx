import { useState } from 'react';
import UserForm from '../../components/Form/UserForm';
import { createUser } from '../../services/usersService';
// import { FaPlusSquare } from 'react-icons/fa';


const CreateUser = () => {
    const [successMessage, setSuccessMessage] = useState(null); // State to track the success message
    const [errorMessage, setErrorMessage] = useState(null); // State to track any error messages

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        role: 'Content Writer',
        agencyName: '',
        profileImage: null,
    };

    const handleCreateUser = async (formData) => {
        try {
            const response = await createUser(formData); // Await API response
            if (response.status === 200 || response.status === 201) {
                setSuccessMessage(response.message || 'User created successfully!'); // Use message from response
                setErrorMessage(null); // Clear any error messages
            } else {
                setErrorMessage(response.message || 'Failed to create user. Please try again.'); // Use message from response
                setSuccessMessage(null); // Clear any success messages
            }
        } catch (error) {
            // Check if the error response contains a message from the server
            const message = error?.message || 'Failed 2 to create user. Please try again.';
            setErrorMessage(message); // Set error message
            setSuccessMessage(null); // Clear any success messages
        }
    };

    return (
        <>
            <div className='d-flex-space-between mb-2'>
                <h2>Users</h2>
            </div>
            <div className='section'>
                <h2>Create User</h2>
                <p className='mb-2'>New User</p>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <UserForm
                    initialValues={initialValues}
                    onSubmit={handleCreateUser}
                    submitLabel="Create New User"
                />
            </div>
        </>
    );
};

export default CreateUser;
