import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FieldAndError from './FieldAndError';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ClientForm = ({ initialValues, onSubmit }) => {
    const socialMedia = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube']

    const getIconComponent = (platform) => {
        switch (platform) {
            case 'facebook':
                return <FaFacebookF />;
            case 'instagram':
                return <FaInstagram />;
            case 'twitter':
                return <FaTwitter />;
            case 'linkedin':
                return <FaLinkedin />;
            case 'youtube':
                return <FaYoutube />;
            default:
                return null;
        }
    };

    const validationSchema = Yup.object({
        businessName: Yup.string().required('Business name is required'),
        businessDetails: Yup.string().required('Business details are required'),
        businessAddress: Yup.string().required('Business address is required'),
        businessWhatsappNumber: Yup.string().required('Business WhatsApp number is required'),
        businessEmailAddress: Yup.string().email('Invalid business email format').required('Business Email address is required'),
        targetRegion: Yup.string().required('Target region is required'),
        businessWebsite: Yup.string().url('Invalid URL').required('Business website is required'),
        contactPerson: Yup.string().required('Contact person is required'),
        brandGuidelinesLink: Yup.string().url('Invalid URL').required('Brand guidelines link is required'),
        ugcDriveLink: Yup.string().url('Invalid URL').required('UGC drive link is required'),

        // Web Development Details Validation
        websiteType: Yup.string().required('Website type is required'),
        noOfProducts: Yup.number().when('websiteType', {
            is: 'products', // Trigger validation only when 'products' is selected
            then: Yup.number().required('Number of products is required').min(1, 'Must be at least 1'),
            otherwise: Yup.number().notRequired(),
        }),
        membership: Yup.string().required('Membership selection is required'),
        additionalNotes: Yup.string(),
        websiteStructure: Yup.string().required('Website structure is required'),
        designPreferences: Yup.string().required('Design preferences are required'),
        domain: Yup.string().required('Domain selection is required'),
        hosting: Yup.string().required('Hosting selection is required'),
        websiteManagement: Yup.string().required('Website management selection is required'),
        selfUpdate: Yup.string().required('Self-update selection is required'),
        contentPrepared: Yup.string().required('Content preparedness is required'),

        // Social Media Links Validation
        socialHandles: Yup.array().of(
            Yup.object({
                icon: Yup.string().required('Platform is required'),
                handle: Yup.string().required('Handle is required')
            })
        ),
        // New Service Information Validation
        services: Yup.array().min(1, 'Please select at least one service')
    });

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values }) => (
                <Form>
                    {console.log('values', values)}
                    <div className="row wrap gap-10 m-0">
                        <div className="col-md-12">
                            {/* Service Information */}
                            <div className="form-group">
                                <h2 htmlFor="services">Service Information</h2>
                                <div className="d-flex gap-20">
                                    <div className="form-check">
                                        <Field type="checkbox" name="services" value="socialMedia" id="socialMedia" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="socialMedia">Social Media Services</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="checkbox" name="services" value="webDevelopment" id="webDevelopment" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="webDevelopment">Web Development Services</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            {/* Client Business Information */}
                            <FieldAndError name="businessName" label="Business Name" placeholder="Good Guys Wash Shack" customClass="border-input" />
                            <FieldAndError name="businessDetails" label="Business Details/Industry" type="textarea" rows="6" placeholder="Car Wash Service" customClass="border-input" />
                            <FieldAndError name="businessAddress" label="Business Address" placeholder="34 Huldah Ave. George Town, Grand Cayman" customClass="border-input" />
                            <FieldAndError name="businessWhatsappNumber" label="Business WhatsApp Number" placeholder="(345) 938-0666" customClass="border-input" />
                            <FieldAndError name="businessEmailAddress" label="Business Email Address" placeholder="info@goodguyswashshack.com" customClass="border-input" />
                            {/* Conditional Rendering for Target Region */}
                            {(values.services?.includes('socialMedia') && values.services?.includes('webDevelopment')) ||
                                (values.services?.includes('socialMedia') && !values.services?.includes('webDevelopment')) ? (
                                <FieldAndError name="targetRegion" label="Target Region" placeholder="Cayman Islands" customClass="border-input" />
                            ) : null}
                            <div className="form-group">
                                <label htmlFor="businessOfferings">Business Offerings</label>
                                <div className="d-flex gap-20">
                                    <div className="form-check">
                                        <Field type="radio" name="businessOfferings" id="services" value="services" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="services">Services</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="radio" name="businessOfferings" id="products" value="products" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="products">Products</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="radio" name="businessOfferings" id="servicesProducts" value="services_products" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="servicesProducts">Services + Products</label>
                                    </div>
                                </div>
                            </div>
                            <FieldAndError name="businessWebsite" label="Business Website" placeholder="https://goodguyswashshack.com" customClass="border-input" />
                        </div>

                        <div className="col-md-6">
                            <FieldAndError name="contactPerson" label="Contact Person" placeholder="Lachlan Hewitt, Gregg Watkins, Peter Anderson" customClass="border-input" />
                            <FieldAndError name="brandKeyPoints" label="Brand Key Points" type="textarea" rows="6" placeholder="Key points here" customClass="border-input" />
                            <FieldAndError name="brandGuidelinesLink" label="Brand Guidelines Link" placeholder="https://drive.google.com" customClass="border-input" />

                            {(values.services?.includes('socialMedia') && values.services?.includes('webDevelopment')) ||
                                (values.services?.includes('socialMedia') && !values.services?.includes('webDevelopment')) ? (<FieldAndError name="ugcDriveLink" label="UGC Drive Link" placeholder="https://drive.google.com" customClass="border-input" />
                            ) : null}
                            <label>Social Handles</label>
                            <div className="d-flex field-and-error">
                                <div className="social-handle field-container d-flex">
                                    <FaFacebookF id="socialIcon1" className='soci' onClick={() => updateIcon(1)} style={{ cursor: 'pointer' }} />
                                    <FieldAndError name="facebookHandle" placeholder="@goodguyswashshack" customClass="border-input soci-in" />
                                </div>
                                <div className="social-handle field-container d-flex">
                                    <FaInstagram id="socialIcon2" className='soci' onClick={() => updateIcon(2)} style={{ cursor: 'pointer' }} />
                                    <FieldAndError name="instagramHandle" placeholder="@goodguyswashshack" customClass="border-input soci-in" />
                                </div>
                            </div>

                            {(values.services?.includes('webDevelopment') && values.services?.includes('socialMedia')) ||
                                (values.services?.includes('webDevelopment') && !values.services?.includes('socialMedia')) ? (<>
                                    {/* Web Development Details */}
                                    <FieldAndError name="websiteType" label="Website Type" customClass="border-input" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="websiteType" value="products" /> Ecommerce (Products)
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="websiteType" value="services" /> Offer Services
                                            </label>
                                        </div>
                                    )} />
                                    {(values.websiteType === 'products') && (
                                        <FieldAndError
                                            name="noOfProducts"
                                            label="No. of Products"
                                            type="number"
                                            placeholder="Enter the number of products"
                                            customClass="border-input"
                                        />
                                    )}
                                    <FieldAndError name="membership" label="Do you offer any Membership?" customClass="border-input" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="membership" value="Yes" /> Yes
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="membership" value="No" /> No
                                            </label>
                                        </div>
                                    )} />
                                </>
                            ) : null}
                        </div>

                        {(values.services?.includes('webDevelopment') && values.services?.includes('socialMedia')) ||
                            (values.services?.includes('webDevelopment') && !values.services?.includes('socialMedia')) ? (
                            <>
                                {/* Other Fields */}
                                <div className="col-md-6">
                                    <h4>Website Structure</h4>
                                    <p className='frm-txt'>Please list all the sections/pages you think you’ll need. (For example: Home, About, Services, Contact, etc.)</p>
                                    <FieldAndError name="websiteStructure" placeholder="Type here" customClass="border-input mt-1" />
                                    <h4>Design Preferences</h4>
                                    <p className='frm-txt'>Is there a specific look and feel that you have in mind? Please include at least 3 links to competitor sites or templates. Describe or provide examples of design inspiration and What do you like and dislike about them? What would you like to do differently?</p>
                                    <FieldAndError name="designPreferences" placeholder="Type here" customClass="border-input mt-1" />
                                </div>

                                {/* Domain and Hosting */}
                                <div className="col-md-6">
                                    <h2>Domain and Hosting Information</h2>
                                    <FieldAndError name="domain" label="Do you already have a domain name?" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="domain" value="Yes" /> Yes
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="domain" value="No" /> No
                                            </label>
                                        </div>
                                    )} />
                                    <FieldAndError name="hosting" label="Do you need hosting?" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="hosting" value="Yes" /> Yes
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="hosting" value="No" /> No
                                            </label>
                                        </div>
                                    )} />

                                    <h2>Content Preparedness</h2>
                                    <FieldAndError name="contentPrepared" label="Is all content prepared?" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="contentPrepared" value="Yes" /> Yes
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="contentPrepared" value="No" /> No
                                            </label>
                                        </div>
                                    )} />

                                </div>

                                {/* Other Final Fields */}
                                <div className="col-md-6">
                                    <h2>Website Management
                                    </h2>
                                    <FieldAndError name="websiteManagement" label="Do you need website management?" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="websiteManagement" value="Yes" /> Yes
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="websiteManagement" value="No" /> No
                                            </label>
                                        </div>
                                    )} />
                                    <FieldAndError name="selfUpdate" label="Do you want to update the site yourself?" renderField={() => (
                                        <div className="d-flex gap-20">
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="selfUpdate" value="Yes" /> Yes
                                            </label>
                                            <label className="d-flex chk-scochi">
                                                <Field type="radio" name="selfUpdate" value="No" /> No
                                            </label>
                                        </div>
                                    )} />
                                </div>
                            </>
                        ) : null}

                        <div className='col-md-12'>
                            <FieldAndError name="additionalNotes" label="Additional Notes" type="textarea" rows="4" placeholder="Enter notes here" customClass="border-input mt-1" />
                        </div>

                    </div>

                    <div className="d-flex justify-center">
                        <button type="submit" className="btn button-secondary px-5">Update Information</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

ClientForm.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ClientForm;
