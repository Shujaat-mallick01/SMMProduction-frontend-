import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { loginUser } from '../../services/authService'
import FieldAndError from '../../components/Form/FieldAndError'
import '../../styles/pages/Auth/UserFlow.scss'

const ForgotPassword = () => {

    const initialValues = {
        email: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
    })

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const data = await loginUser(values.email, values.password);
            console.log('Forgot Password successful:', data);
        } catch (error) {
            console.error('Forgot Password failed:', error);
            setErrors({ email: 'Invalid email or password' });
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="container">
            <div className="userflow-container">
                <div className="userflow-bx">
                    <h2>Forgot Password</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <FieldAndError
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    placeholder="Email Address"
                                    labelClass="label-base label-white"
                                />
                                <button className='button button-secondary' type="submit" disabled={isSubmitting}>Reset Password </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
