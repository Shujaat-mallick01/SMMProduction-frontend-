import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FieldAndError from '../../components/Form/FieldAndError';

const WebDevelopmentDetails = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    websiteType: Yup.string().required('Website type is required'),
    noOfProducts: Yup.number().required('Number of products is required'),
    membership: Yup.string().required('Membership selection is required'),
    additionalNotes: Yup.string(),
    websiteStructure: Yup.string().required('Website structure is required'),
    designPreferences: Yup.string().required('Design preferences are required'),
    domain: Yup.string().required('Domain selection is required'),
    hosting: Yup.string().required('Hosting selection is required'),
    websiteManagement: Yup.string().required('Website management selection is required'),
    selfUpdate: Yup.string().required('Self-update selection is required'),
    contentPrepared: Yup.string().required('Content preparedness is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <div className='section'>
          <Form>
            <div className="row col-gap wrap gap-10">
              <div className="col-md-6 col-sm-12">
                <FieldAndError
                  name="websiteType"
                  label="Website Type"
                  customClass="border-input"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="websiteType" value="products" />
                        Ecommerce (Products)
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="websiteType" value="services" />
                        Offer Services
                      </label>
                    </div>
                  )}
                />
                <FieldAndError
                  name="noOfProducts"
                  label="No. of Products"
                  type="number"
                  placeholder="No. of Products"
                  customClass="border-input"
                />
              </div>

              <div className="col-md-6 col-sm-12">
                <FieldAndError
                  name="membership"
                  label="Do you offer any Membership?"
                  customClass="border-input"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="membership" value="Yes" />
                        Yes
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="membership" value="No" />
                        No
                      </label>
                    </div>
                  )}
                />
                <FieldAndError
                  name="additionalNotes"
                  label="Additional Notes"
                  type="textarea"
                  rows="4"
                  placeholder="Additional Notes"
                  customClass="border-input"
                />
              </div>

              <div className="col-md-12">
                <FieldAndError
                  name="websiteStructure"
                  label="Website Structure"
                  placeholder="Type here"
                  customClass="border-input mt-1"
                />
                <FieldAndError
                  name="designPreferences"
                  label="Design Preferences"
                  placeholder="Type here"
                  customClass="border-input mt-1"
                />
              </div>

              <div className="col-md-6">
                <h3 className="plicn mb-1">Domain and Hosting Information</h3>
                <FieldAndError
                  name="domain"
                  label="Do you already have a domain name?"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="domain" value="Yes" />
                        Yes
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="domain" value="No" />
                        No
                      </label>
                    </div>
                  )}
                />
                <FieldAndError
                  name="hosting"
                  label="Do you have hosting?"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="hosting" value="Yes" />
                        Yes
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="hosting" value="No" />
                        No
                      </label>
                    </div>
                  )}
                />
                <h3 className="plicn mb-1">Website Management</h3>
                <FieldAndError
                  name="websiteManagement"
                  label="Will there be sections that need regular updating?"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="websiteManagement" value="Yes" />
                        Yes
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="websiteManagement" value="No" />
                        No
                      </label>
                    </div>
                  )}
                />
                <FieldAndError
                  name="selfUpdate"
                  label="Would you like to be able to do most of the updating yourself?"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="selfUpdate" value="Yes" />
                        Yes
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="selfUpdate" value="No" />
                        No
                      </label>
                    </div>
                  )}
                />
              </div>

              <div className="col-md-6">
                <h3 className="plicn mb-1">Content Preparedness</h3>
                <FieldAndError
                  name="contentPrepared"
                  label="Do you have content and images prepared?"
                  renderField={() => (
                    <div className="field-container d-flex gap-20">
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="contentPrepared" value="Yes" />
                        Yes
                      </label>
                      <label className="d-flex chk-scochi">
                        <Field type="radio" name="contentPrepared" value="No" />
                        No
                      </label>
                    </div>
                  )}
                />
                <FieldAndError
                  name="additionalNotes"
                  label="Additional Notes"
                  type="textarea"
                  rows="5"
                  placeholder="Additional Notes"
                  customClass="border-input"
                />
              </div>

              <div className="button-container">
                <button className="button-secondary" type="submit">
                  Update Information
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

WebDevelopmentDetails.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WebDevelopmentDetails;
