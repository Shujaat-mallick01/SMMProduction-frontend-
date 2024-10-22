import React, { useState } from 'react';
import facebookIcon from "../../assets/Images/facebook.png";
import instagramIcon from "../../assets/Images/instagram.png";
import linkedinIcon from "../../assets/Images/linkedin.png";
import pinterestIcon from "../../assets/Images/pinterest.png";
import snapchatIcon from "../../assets/Images/snapchat.png";
import tiktokIcon from "../../assets/Images/tiktok.png";
import xIcon from "../../assets/Images/x.png"; // Assuming 'x' is Twitter
import youtubeIcon from "../../assets/Images/Youtube.png";
import { Formik, Form } from 'formik';
import FieldAndError from '../../components/Form/FieldAndError'; // Adjust the import path as necessary

const PlanForm = () => {
    const [planName, setPlanName] = useState('');
    const [platforms, setPlatforms] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setPlatforms([...platforms, value]);
        } else {
            setPlatforms(platforms.filter((platform) => platform !== value));
        }
    };

    const handleSubmit = (values) => {
        console.log('Plan Name:', values.planName);
        console.log('Posts:', values.posts);
        console.log('Reels:', values.reels);
        console.log('Carousels:', values.carousels);
        console.log('Platforms:', platforms);
    };

    const standardPlanCost = 549.00;
    const carouselsCost = 20.00; // 2 Carousels
    const postCost = 100.00; // 10 Posts
    const reelsCost = 200.00; // 10 Reels/Videos

    return (
        <div className="section">
            <Formik
                initialValues={{
                    planName: '',
                    posts: '8',
                    reels: '4',
                    carousels: '2'
                }}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className="row display-block-mob col-gap gap-10">
                            <div className="col-md-6">
                                <div className="field-and-error form-section">
                                    <div className="field-container form-group">
                                        <label htmlFor="selectedPlan">Selected Plan</label>
                                        <FieldAndError
                                            name="planName"
                                            placeholder="Enter Plan Name"
                                            required
                                            customClass="form-control border-input"
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Package Inclusions</label>
                                        <div className="inclusions row mx-0 mt-1 gap-10 wrap">
                                            <div className='d-flex gap-10 pt-1 align-center col-md-2'>
                                                <label>Posts</label>
                                                <FieldAndError
                                                    name="posts"
                                                    type="number"
                                                    min="0"
                                                    placeholder="Enter number of posts"
                                                    customClass=" border-input pxy-10 min-width-50"
                                                    containerClass="m-0"
                                                />
                                            </div>
                                            <div className='d-flex gap-10 pt-1 align-center col-md-2'>
                                                <label>Reels</label>
                                                <FieldAndError
                                                    name="reels"
                                                    type="number"
                                                    min="0"
                                                    placeholder="Enter number of reels"
                                                    customClass="border-input pxy-10 min-width-50"
                                                    containerClass="m-0"
                                                />
                                            </div>
                                            <div className='d-flex gap-10 pt-1 align-center col-md-2'>
                                                <label>Carousels</label>
                                                <FieldAndError
                                                    name="carousels"
                                                    type="number"
                                                    min="0"
                                                    placeholder="Enter number of carousels"
                                                    customClass="border-input pxy-10 min-width-50"
                                                    containerClass="m-0"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Platforms</label>
                                        <div className="platform-checkbox d-flex wrap gap-20 pt-1">
                                            <label className='d-flex gap-20 chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="Facebook"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={facebookIcon} alt="Facebook" width="24" height="24" />
                                            </label>
                                            <label className='d-flex gap-20 chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="Instagram"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={instagramIcon} alt="Instagram" width="24" height="24" />
                                            </label>
                                            <label className='d-flex gap-20 chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="TikTok"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={tiktokIcon} alt="TikTok" width="24" height="24" />
                                            </label>
                                            <label className='d-flex chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="Snapchat"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={snapchatIcon} alt="Snapchat" width="24" height="24" />
                                            </label>
                                            <label className='d-flex chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="Pinterest"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={pinterestIcon} alt="Pinterest" width="24" height="24" />
                                            </label>
                                            <label className='d-flex chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="LinkedIn"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
                                            </label>
                                            <label className='d-flex chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="YouTube"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={youtubeIcon} alt="YouTube" width="24" height="24" />
                                            </label>
                                            <label className='d-flex chk-scochi'>
                                                <input
                                                    type="checkbox"
                                                    value="Twitter"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <img src={xIcon} alt="Twitter" width="24" height="24" />
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="button-secondary mt-5">Update Plan</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="container-secondary-bg pxy-3">
                                    <div className='border-bottom pb-2'>
                                        <div className='plan-name d-flex d-flex-space-between mb-1'>
                                            <h3 className='plicn'>Plan Inclusions</h3>
                                            <h4 className='plicn'>${standardPlanCost}.00</h4>
                                        </div>
                                        <ul className='px-3'>
                                            <li>
                                                <strong>{values.posts}</strong> Social Media Posts
                                            </li>
                                            <li>
                                                <strong>{values.reels}</strong> Social Media Reels/Videos
                                            </li>
                                            <li>
                                                <strong>Platforms:</strong> {platforms.join(', ') || 'None selected'}
                                            </li>
                                            <li>
                                                <strong>Validity:</strong> 30 Days
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='Bill pt-2'>
                                        <div className='Add-ons d-flex d-flex-space-between mb-1'>
                                            <h4>Add Ons</h4>
                                            <h4>${carouselsCost + postCost + reelsCost}.00</h4>
                                        </div>

                                        <div className='services d-flex d-flex-space-between'>
                                            <p> Carousels (2 x $10.00)</p>
                                            <p>${carouselsCost}</p>
                                        </div>
                                        <div className='services d-flex d-flex-space-between'>
                                            <p> Posts (2 x $10.00)</p>
                                            <p>${postCost}</p>
                                        </div>
                                        <div className='services d-flex d-flex-space-between'>
                                            <p> Reels/Videos (10 x $20.00)</p>
                                            <p>${reelsCost}</p>
                                        </div>

                                        <div className='d-flex d-flex-space-between button-dark pxy-2 border-radius-10 mt-3'>
                                            <p>Grand Total</p>
                                            <p>${standardPlanCost + carouselsCost + postCost + reelsCost}.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PlanForm;
