import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; // For validation
import FieldAndError from '../../components/Form/FieldAndError'; // Adjust path if needed

const MeetingForm = () => {
    // Initial values for the form
    const initialValues = {
        id: 1,
        date: 'September 11, 2024',
        time: '16:00 PKT',
        meetingTime: 'Onboarding Meeting',
        client: 'Good Guys Wash Shack',
        links: 'www.shujaat.com',
    };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        date: Yup.string().required('Date is required'),
        time: Yup.string().required('Time is required'),
        meetingTime: Yup.string().required('Meeting name is required'),
        clients: Yup.string().required('Client name is required'),
        links: Yup.string().url('Invalid URL').required('Link is required'),
    });

    // Form submission handler
    const handleSubmit = (values) => {
        console.log('Form values:', values);
    };

    return (
        <div className="section">
            <h2 className='mb-5'>Meeting Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className='row wrap gap-10 m-0'>
                            <div className='col-md-6'>
                                <FieldAndError
                                    name="date"
                                    label="Date"
                                    type="text"
                                    placeholder="Enter date"
                                    customClass="border-input"
                                />
                            </div>
                            <div className='col-md-6'>
                                <FieldAndError
                                    name="time"
                                    label="Time"
                                    type="text"
                                    placeholder="Enter time"
                                    customClass="border-input"
                                />
                            </div>
                            <div className='col-md-6'>
                                <FieldAndError
                                    name="meetingTime"
                                    label="Meeting Name"
                                    type="text"
                                    placeholder="Enter meeting name"
                                    customClass="border-input"
                                />
                            </div>
                            <div className='col-md-6'>
                                <FieldAndError
                                    name="client"
                                    label="Client"
                                    type="select"
                                    placeholder="Enter client name"
                                    customClass="border-input"
                                    as="select"
                                >
                                    <option value="">Good Guys</option>
                                </FieldAndError>
                            </div>
                            <div className='col-md-12'>
                                <FieldAndError
                                    name="links"
                                    label="Links"
                                    type="url"
                                    placeholder="Enter meeting link"
                                    customClass="border-input"
                                />
                            </div>
                            <button type="submit" className="button-dark">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MeetingForm;
