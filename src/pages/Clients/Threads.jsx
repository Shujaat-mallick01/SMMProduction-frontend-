import avatar from '../../assets/Images/profileAwatar.jfif';
import FieldAndError from '../../components/Form/FieldAndError'; // Adjust the import path accordingly
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const messages = [
    {
        senderName: 'Mark Chen',
        senderRole: 'Account Manager',
        timestamp: 'September 11, 2024 - 06:44 PM',
        text: 'Hello & Welcome to SMM Experts, my name is Danish Kaleem & I am your Account Manager.',
    },
    {
        senderName: 'Bilal Faheem',
        senderRole: 'Marketing Director',
        timestamp: 'September 11, 2024 - 06:44 PM',
        text: 'Hello & Welcome to SMM Experts, my name is Danish Kaleem & I am your Account Manager.',
    },
];

const ThreadPage = () => {
    return (
        <div className="section d-flex flex-direction-column d-flex-space-between min-height">
            <div className="chat-window pxy-10">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message d-flex flex-direction-column mb-2">
                        <div className="chat-message-info d-flex align-center mb-1">
                        <div className="chat-avatar-wrapper relative inline-block">
                            <img
                                src={avatar}
                                alt={message.senderName}
                                className="chat-avatar relative"
                            />
                            </div>
                            <div className="chat-message-text">{message.text}</div>
                        </div>
                        <div className="chat-sender-information d-flex align-center">
                            <span className="chat-sender-info">{message.senderName}</span>
                            <span className="chat-sender-info">({message.senderRole})</span>
                            <span className="chat-sender-info">- {message.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Formik
                initialValues={{ message: '' }}
                validationSchema={Yup.object({
                    message: Yup.string().required('Message is required'),
                })}
                onSubmit={(values, { resetForm }) => {
                    // Handle message send here
                    console.log('Message:', values.message);
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="chat-input-container d-flex align-center mt-3 d-flex-space-between">
                        <FieldAndError
                            name="message"
                            type="text"
                            placeholder="Type your message here..."
                            customClass="chat-input"
                            containerClass="m-0"
                        />
                        <button
                            type="submit"
                            className="button-secondary px-3"
                            disabled={isSubmitting}
                        >
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ThreadPage;
