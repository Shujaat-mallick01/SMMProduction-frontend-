import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { loginUser } from '../../services/authService'
import FieldAndError from '../../components/Form/FieldAndError'
import '../../styles/pages/Auth/UserFlow.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()
    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    })

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const data = await loginUser(values.username, values.password);
            setSuccessMessage(data.message)
            navigate('/')
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid username or password');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="container">
            <div className="userflow-container">
                <div className="userflow-bx">
                    <h2>Login</h2>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <FieldAndError
                                    name="username"
                                    label="Username"
                                    type="text"
                                    placeholder="Username"
                                    labelClass="label-base label-white"
                                />
                                <FieldAndError
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    showPasswordToggle={true} // Enable show/hide password
                                    labelClass="label-base label-white"
                                />
                                <Link to={'/forgot-password'} className='forget-link'>Forgot password?</Link>
                                <button className='button button-secondary' type="submit" disabled={isSubmitting}>Login</button>
                            </Form>
                        )}
                    </Formik>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
