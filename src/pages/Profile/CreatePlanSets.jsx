import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FieldAndError from '../../components/Form/FieldAndError';
import facebook from '../../assets/Images/facebook.png'
import instagram from '../../assets/Images/instagram.png'
import linkedin from '../../assets/Images/linkedin.png'
import pinterest from '../../assets/Images/pinterest.png'
import snapchat from '../../assets/Images/snapchat.png'
import tiktok from '../../assets/Images/tiktok.png'
import youtube from '../../assets/Images/Youtube.png'
import x from '../../assets/Images/x.png'

const PlanSetForm = () => {
    const [creativeAddOns] = useState({
        post: 10,
        reelVideo: 10,
        carousel: 10
    });
    const [platformAddOns] = useState({
        facebook: 0,
        instagram: 0,
        tiktok: 10,
        snapchat: 10,
        twitter: 10,
        linkedin: 5,
        youtube: 10,
        pinterest: 10
    });

    const initialValues = {
        planSetName: '',
        standardPlan: {
            posts: false,
            reels: false,
            carousels: false,
            inclusions: '',
            price: ''
        },
        advancedPlan: {
            posts: false,
            reels: false,
            carousels: false,
            inclusions: '',
            price: ''
        },
        creativeAddOns: {
            post: creativeAddOns.post,
            reelVideo: creativeAddOns.reelVideo,
            carousel: creativeAddOns.carousel,
        },
        platformAddOns: {
            facebook: platformAddOns.facebook,
            instagram: platformAddOns.instagram,
            tiktok: platformAddOns.tiktok,
            snapchat: platformAddOns.snapchat,
            twitter: platformAddOns.twitter,
            linkedin: platformAddOns.linkedin,
            youtube: platformAddOns.youtube,
            pinterest: platformAddOns.pinterest,
        }
    };

    const handleSavePlanSet = (values) => {
        // Handle form submission
        console.log('Plan Set:', values);
    };

    return (
        <>
            <div className='mb-2'>
                <h2>Create Plan Sets</h2>
            </div>
            <div className='section'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSavePlanSet}
                >
                    {() => (
                        <Form>
                            <div className="form-group mb-2 Create-plan-set">
                                <div className='col-md-6'>
                                    <FieldAndError
                                        name="planSetName"
                                        label="Plan Set Name"
                                        placeholder="Lorem Ipsum"
                                        customClass="w-100 border-input" // Ensure the input takes full width
                                        containerClass="d-flex flex-direction-row align-center relative"
                                    />
                                </div>
                            </div>

                            <div className='row flex-direction-row wrap Create-plan-set gap-10 justify-center'>
                                {/* Standard Plan */}
                                <div className="plan standard-plan col-md-4 section">
                                    <h2 className='mb-2 text-center'>Standard Plan</h2>
                                    <FieldAndError
                                        name="standardPlan.posts"
                                        label="Posts"
                                        type="number"
                                        customClass="w-100 border-input"
                                        containerClass="d-flex align-center flex-direction-row-reverse relative plan-card"
                                    />
                                    <FieldAndError
                                        name="standardPlan.reels"
                                        label="Reels/Videos"
                                        type="number"
                                        customClass="w-100 border-input"
                                        containerClass="d-flex align-center flex-direction-row-reverse relative plan-card"
                                    />
                                    <FieldAndError
                                        name="standardPlan.carousels"
                                        label="Carousels"
                                        type="number"
                                        customClass="w-100 border-input"
                                        containerClass="d-flex align-center flex-direction-row-reverse relative plan-card"
                                    />
                                    <FieldAndError
                                        name="standardPlan.inclusions"
                                        label="Plan Inclusions"
                                        type="textarea"
                                        rows={6}
                                        customClass="w-100 border-input"
                                        containerClass="d-block relative"
                                    />
                                    <FieldAndError
                                        name="standardPlan.price"
                                        label="Price/Month"
                                        type="number"
                                        customClass="width-100 border-input "
                                        containerClass=" d-flex flex-direction-row gap-10 align-center pri-mon"
                                    />
                                </div>

                                <div className="plan advanced-plan col-md-4 section">
                                    <h2 className='mb-2 text-center'>Advanced Plan</h2>
                                    <FieldAndError
                                        name="advancedPlan.posts"
                                        label="Posts"
                                        type="number"
                                        customClass="w-100 border-input"
                                        containerClass="d-flex align-center flex-direction-row-reverse plan-card relative"
                                    />
                                    <FieldAndError
                                        name="advancedPlan.reels"
                                        label="Reels/Videos"
                                        type="number"
                                        customClass="w-100 border-input"
                                        containerClass="d-flex align-center flex-direction-row-reverse plan-card relative"
                                    />
                                    <FieldAndError
                                        name="advancedPlan.carousels"
                                        label="Carousels"
                                        type="number"
                                        customClass="w-100 border-input"
                                        containerClass="d-flex align-center flex-direction-row-reverse plan-card relative"
                                    />
                                    <FieldAndError
                                        name="advancedPlan.inclusions"
                                        label="Plan Inclusions"
                                        type="textarea"
                                        rows={6}
                                        customClass="w-100 border-input"
                                        containerClass="d-block"
                                    />
                                    <FieldAndError
                                        name="advancedPlan.price"
                                        label="Price/Month"
                                        type="number"
                                        customClass="width-100 border-input"
                                        containerClass="flex-direction-row gap-10 d-flex align-center pri-mon "
                                    />
                                </div>

                                {/* Add Ons Section */}
                                <div className=" pri-mon add-ons-container col-md-4 px-3">
                                    {/* Creative Add Ons */}
                                    <div className="creative-add-ons">
                                        <h2 className='mb-2 mt-3'>Creative Add Ons</h2>
                                        <FieldAndError
                                            name="creativeAddOns.post"
                                            label="Post"
                                            type="number"
                                            customClass="border-input width-50 pxy-10"
                                            containerClass="add-on-item d-flex align-center"
                                        />
                                        <FieldAndError
                                            name="creativeAddOns.reelVideo"
                                            label="Reel / Video"
                                            type="number"
                                            customClass="border-input width-50 pxy-10"
                                            containerClass="add-on-item d-flex align-center"
                                        />
                                        <FieldAndError
                                            name="creativeAddOns.carousel"
                                            label="Carousel"
                                            type="number"
                                            customClass="border-input width-50 pxy-10"
                                            containerClass="add-on-item d-flex align-center"
                                        />
                                    </div>

                                    {/* Platform Add Ons */}
                                   <div className="platform-add-ons">
                                        <h2 className='mb-2'>Platform Add Ons</h2>
                                        <div className='plt-add d-flex gap-20'>
                                            <div className=''>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1 mb-1">
                                                    <img src= {facebook} alt="Facebook" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.facebook"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={instagram} alt="Instagram" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.instagram"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={tiktok} alt="TikTok" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.tiktok"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={snapchat} alt="Snapchat" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.snapchat"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={x} alt="Twitter" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.twitter"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={linkedin} alt="LinkedIn" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.linkedin"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={youtube} alt="YouTube" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.youtube"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                                <div className="d-flex align-center add-on-item gap-10 mb-1">
                                                    <img src={pinterest} alt="Pinterest" className="platform-img" />
                                                    <FieldAndError
                                                        name="platformAddOns.pinterest"
                                                        type="number"
                                                        customClass="border-input width-50 pxy-10 pxy-10"
                                                        containerClass="m-0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='button-secondary' type="submit">Save Plan Set</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default PlanSetForm;
