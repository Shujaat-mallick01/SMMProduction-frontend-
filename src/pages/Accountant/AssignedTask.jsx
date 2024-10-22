import React, { useState } from 'react';

const BillingPage = () => {
    const [Billing, setBilling] = useState([
        {
            id: 1,
            billingFrom: 'August, 2024',
            billingTo: 'August, 2024',
            invoice: 'Uploaded Invoice.pdf',
            status: 'Paid',
        },
    ]);

    const [newBill, setNewBill] = useState({
        billingFrom: '',
        billingTo: '',
        invoice: null,
        status: 'Unpaid',
    });

    // Handle file upload change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewBill({ ...newBill, invoice: file.name });
        }
    };

    // Handle  change
    const handleFieldChange = (e, field) => {
        setNewBill({ ...newBill, [field]: e.target.value });
    };

    // Handle adding a new Bill
    const handleAddBill = () => {
        if (newBill.billingFrom && newBill.billingTo && newBill.invoice) {
            const newBillData = { ...newBill, id: Billing.length + 1, status: 'Paid' }; // Set status to 'Paid'
            setBilling([...Billing, newBillData]);
            setNewBill({ billingFrom: '', billingTo: '', invoice: null, status: 'Unpaid' }); // Reset  
        }
    };

    return (
        <div className='section'>
            <div className='max-height'>
                <table cellPadding="10" cellSpacing="0">
                    <thead>
                        {/* Table headers */}
                        <tr>
                            <th className='width-mob-tb'>Billing from</th>
                            <th className='width-mob-tb'>Billing to</th>
                            <th className=''>Invoice</th>
                            <th className=''>Status</th>
                        </tr>
                        {/* Fixed input row at the top */}
                        <tr className="team-row">
                            <td>
                                <div className="field-and-error">
                                    <div className="field-container ">
                                        <select
                                            className='border-input'
                                            value={newBill.billingFrom}
                                            onChange={(e) => handleFieldChange(e, 'billingFrom')}
                                        >
                                            <option value="">Select Month</option>
                                            <option>August, 2024</option>
                                            <option>September, 2024</option>
                                            <option>October, 2024</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="field-and-error">
                                    <div className="field-container ">
                                        <select
                                            className='border-input'
                                            value={newBill.billingTo}
                                            onChange={(e) => handleFieldChange(e, 'billingTo')}
                                        >
                                            <option value="">Select Month</option>
                                            <option>August, 2024</option>
                                            <option>September, 2024</option>
                                            <option>October, 2024</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button className="upload-button-container button-primary-light">
                                    <input
                                        type="file"
                                        id="upload"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="upload" className="upload-button cursor-pointer">
                                        {newBill.invoice ? 'Uploaded' : 'Upload Invoice'}
                                    </label>
                                </button>
                            </td>
                            <td>
                                <button className="view-btn button-dark" onClick={handleAddBill}>Submit</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {Billing.map((Bill) => (
                            <tr key={Bill.id} className="team-row">
                                <td>{Bill.billingFrom}</td>
                                <td>{Bill.billingTo}</td>
                                <td>
                                    {Bill.invoice ? (
                                        <button className="view-btn button-primary-light">View</button>
                                    ) : (
                                        <button className="upload-button-container button-primary-light">Upload Invoice</button>
                                    )}
                                </td>
                                <td>
                                    <button className={`status-btn ${Bill.status === 'Paid' ? 'button-paid' : 'button-unpaid'}`}>
                                        {Bill.status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillingPage;
