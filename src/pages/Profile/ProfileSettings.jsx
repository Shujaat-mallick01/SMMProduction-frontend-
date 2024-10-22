import UserForm from '../../components/Form/UserForm';
import axios from 'axios';

const ProfileSettings = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        role: 'Content Writer',
        agencyName: '',
        profileImage: null,
    };

    const handleProfileSettings = (formData) => {
        // Simulate sending formData to an API
        axios.post('/api/users', formData)
            .then((response) => {
                console.log('User Created:', response.data);
            });
    };

    return (
        <>
            <div className='section'>
                <h2>User Setting</h2>
                <p className='mb-2'>Profile</p>
                <UserForm
                    initialValues={initialValues}
                    onSubmit={handleProfileSettings}
                    submitLabel="Update Information"
                    isOwnProfile={true}
                />
            </div>
        </>
    );
};

export default ProfileSettings;
