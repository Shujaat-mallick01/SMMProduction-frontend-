import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import PropTypes from 'prop-types';
import FieldAndError from './FieldAndError';
import userprofile  from "../../assets/Images/ProfilePicture.png";


const UserForm = ({ initialValues, onSubmit, submitLabel, isOwnProfile = false }) => {
    const [profileImage, setProfileImage] = useState(initialValues.profileImage || null);
    const [selectedRole, setSelectedRole] = useState(initialValues.role || '');

    const handleImageUpload = (event, setFieldValue) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);

            setFieldValue('profileImage', file);
        }
    };

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                first_name: Yup.string().required('Required'),
                last_name: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                ...(isOwnProfile ? {
                    newPassword: Yup.string()
                        .min(6, 'Password must be at least 6 characters long')
                        .required('Required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                        .required('Required'),
                } : {
                    role: Yup.string().required('Role is required'),

                    agencyName: Yup.string().when('role', {
                        is: 'Account Manager',
                        then: (schema) => schema.required('Agency name is required for Account Manager'),
                        otherwise: (schema) => schema.nullable(),
                    }),

                    team: Yup.string().when('role', {
                        is: (role) => role !== 'Account Manager',
                        then: (schema) => schema.required('Team is required for non-Account Manager roles'),
                        otherwise: (schema) => schema.nullable(),
                    }),
                })
            })}

            onSubmit={(values, { setSubmitting }) => {
                const formData = new FormData();
                formData.append('first_name', values.first_name);
                formData.append('last_name', values.last_name);
                formData.append('email', values.email);

                if (!isOwnProfile) {
                    formData.append('role', values.role);
                    formData.append('agencyName', values.agencyName || '');
                    formData.append('team', values.team || '');
                } else {
                    formData.append('newPassword', values.newPassword);
                    formData.append('confirmPassword', values.confirmPassword);
                }

                if (values.profileImage) {
                    formData.append('profileImage', values.profileImage);
                }

                onSubmit(formData);
                setSubmitting(false);
            }}

        >
            {({ isSubmitting, values, setFieldValue }) => (
                <div className="user-page-content">
                    <div className='row gap-0 user-reesponsive'>
                        <div className='col-md-7'>
                            <div className="create-user-section">
                                <Form>
                                    <FieldAndError customClass="border-input" name="first_name" label="First Name" labelClass="label-base label-dark" placeholder='First Name' />
                                    <FieldAndError customClass="border-input" name="last_name" label="Last Name" labelClass="label-base label-dark" placeholder='Last Name' />
                                    <FieldAndError customClass="border-input" name="email" label="Email Address" type="email" labelClass="label-base label-dark" placeholder='Email Address' />

                                    {!isOwnProfile && (
                                        <>
                                            <FieldAndError
                                                customClass="border-input"
                                                name="role"
                                                label="Role"
                                                as="select"
                                                value={values.role} // Ensure the value is connected to Formik's state
                                                onChange={(e) => {
                                                    handleRoleChange(e); // Call your role change handler
                                                    setFieldValue('role', e.target.value); // Update Formik's state manually
                                                }}
                                                labelClass="label-base label-dark"
                                            >
                                                <option value="Content Writer">Content Writer</option>
                                                <option value="Graphic Designer">Graphic Designer</option>
                                                <option value="Marketing Manager">Marketing Manager</option>
                                                <option value="Account Manager">Account Manager</option>
                                            </FieldAndError>
                                            {selectedRole !== 'Account Manager' && (
                                                <FieldAndError customClass="border-input" name="team" label="Team" type="text" labelClass="label-base label-dark" placeholder='Team Alpha'/>
                                            )}
                                            {selectedRole === 'Account Manager' && (
                                                <FieldAndError customClass="border-input" name="agencyName" label="Agency Name" type="text" labelClass="label-base label-dark" />
                                            )}
                                        </>
                                    )}

                                    {isOwnProfile && (
                                        <>
                                            <FieldAndError customClass="border-input" name="newPassword" placeholder='Enter New Password' label="Enter new password" type="password" labelClass="label-base label-dark" showPasswordToggle={true} />
                                            <FieldAndError customClass="border-input" placeholder='Re-enter new password' name="confirmPassword" label="Re-enter new password" type="password" labelClass="label-base label-dark" showPasswordToggle={true} />
                                        </>
                                    )}

                                    <button type="submit" className='button-secondary mt-5' disabled={isSubmitting}>
                                        {submitLabel}
                                    </button>
                                </Form>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className="profile-display-section text-center mt-5">
                                <div className="user-profile-cre d-flex flex-column align-center flex-direction-column">
                                    <div className="profile-image">
                                        <label htmlFor="fileInput">
                                            <img
                                                src={profileImage || userprofile}
                                                alt="User Profile"
                                            />
                                        </label>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            style={{ display: 'none' }}
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(e, setFieldValue)}
                                        />
                                    </div>
                                    <div className="profile-info mt-1">
                                        <h2>{values.first_name || 'User Name'} {values.last_name}</h2>
                                        <p>{values.role || 'Role'} - {values.team || 'Team'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </Formik>
    )
};

UserForm.propTypes = {
    initialValues: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        role: PropTypes.string,
        agencyName: PropTypes.string,
        team: PropTypes.string,
        profileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]),
        newPassword: PropTypes.string,
        confirmPassword: PropTypes.string,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string.isRequired,
    isOwnProfile: PropTypes.bool, // Prop to indicate if it's the user's own profile
};

export default UserForm;
