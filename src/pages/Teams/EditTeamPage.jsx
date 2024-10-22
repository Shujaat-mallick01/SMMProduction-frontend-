import React from 'react';
import { Formik, Form } from 'formik';
import FieldAndError from '../../components/Form/FieldAndError';
// import * as Yup from 'yup'; // For validation schema

const EditTeamPage = () => {

    return (
        <>
            <h2 className='mb-2'>Team</h2>
            <div className='section'>
                <Formik
                    initialValues={{
                        teamName: '',
                        marketingManager: '',
                        marketingAssistant: '',
                        graphicDesigner: '',
                        contentWriter: ''
                    }}
                    onSubmit={(values) => {
                        console.log('Form Values:', values);
                    }}
                >
                    {() => (
                        <Form>
                            <div className='row col-gap display-block-mob gap-10 wrap'>
                                <div className='col-md-12'>
                                    <div className="field-and-error">
                                        <div className="field-container d-flex flex-direction-row">
                                            <div className='col-md-3'>
                                                <h2>Edit Team</h2>
                                                <p>Team Alpha</p>
                                            </div>
                                            <div className='col-md-9'>
                                                <FieldAndError
                                                    name="teamName"
                                                    type="text"
                                                    placeholder="Team Alpha"
                                                    customClass="border-input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="field-and-error">
                                        <div className="field-container">
                                            <FieldAndError
                                                name="marketingManager"
                                                label="Marketing Manager"
                                                type="select"
                                                customClass="border-input"
                                                as="select"
                                            >
                                                <option value="">Select Marketing Manager</option>

                                            </FieldAndError>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="field-and-error">
                                        <div className="field-container">
                                            <FieldAndError
                                                name="marketingAssistant"
                                                label="Marketing Assistant"
                                                type="select"
                                                customClass="border-input"
                                                as="select"
                                            >
                                                <option value="">Select Marketing Assistant</option>

                                            </FieldAndError>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="field-and-error">
                                        <div className="field-container">
                                            <FieldAndError
                                                name="graphicDesigner"
                                                label="Graphic Designer"
                                                type="select"
                                                customClass="border-input"
                                                as="select"
                                            >
                                                <option value="">Select Graphic Designer</option>
                                            </FieldAndError>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="field-and-error">
                                        <div className="field-container">
                                            <FieldAndError
                                                name="contentWriter"
                                                label="Content Writer"
                                                type="select"
                                                customClass="border-input"
                                                as="select"
                                            >
                                                <option value="">Select Content Writer</option>
                                            </FieldAndError>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className='button-secondary text-left mt-5'>Create Team</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default EditTeamPage;
