import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { setNewPassword } from '../../services/authService';  // Import the new function
import FieldAndError from '../../components/Form/FieldAndError';
import { useNavigate, useParams } from 'react-router-dom';  // For getting uid and token from the URL
import '../../styles/pages/Auth/UserFlow.scss';

const NewPassword = () => {
    const { token, uid } = useParams();  // Extract uid and token from the route
    const navigate = useNavigate();

    const initialValues = {
        password: '',
        confirmPassword: ''
    };

    const validationSchema = Yup.object({
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], '*Passwords do not match')
            .required('Required'),
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            await setNewPassword(uid, token, values.password);  
            console.log('Password has been set successfully');
            navigate('/success-password')
        } catch (error) {
            console.error('Password reset failed:', error);
            setErrors({ password: 'Failed to reset password. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="userflow-container">
                <div className="userflow-bx">
                    <h2>Create new password</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <FieldAndError
                                    name="password"
                                    label="Enter your new password"
                                    type="password"
                                    placeholder="Password"
                                    showPasswordToggle={true}  // Enable show/hide password
                                    labelClass="label-base label-white"
                                />
                                <FieldAndError
                                    name="confirmPassword"
                                    label="Re-enter your new password"
                                    type="password"
                                    placeholder="Password"
                                    showPasswordToggle={true}  // Enable show/hide password
                                    labelClass="label-base label-white"
                                />
                                <button className='button button-secondary' type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;
