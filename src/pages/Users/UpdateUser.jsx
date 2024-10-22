import UserForm from '../../components/Form/UserForm';
import axios from 'axios';

const UpdateUser = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        role: 'Content Writer',
        agencyName: '',
        profileImage: null,
    };

    const handleUpdateUser = (formData) => {
        // Simulate sending formData to an API
        axios.post('/api/users', formData)
            .then((response) => {
                console.log('User Created:', response.data);
            });
    };

    return (
        <>
            <div className='section'>
                <h2>View User</h2>
                <p className='mb-2'>Bilal Faheem Qazi</p>
                <UserForm
                    initialValues={initialValues}
                    onSubmit={handleUpdateUser}
                    submitLabel="Create New User"
                />
            </div>
        </>
    );
};

export default UpdateUser;
