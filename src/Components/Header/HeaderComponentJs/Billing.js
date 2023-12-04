import React, {useState } from 'react';
import "../HeaderComponentCSS/Billing.css";

const BillingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    });

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePayment = () => {
        console.log('Initiate UPI Payment', formData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);
        handlePayment();
    };

    return (
        <form className="billing-form" onSubmit={handleSubmit}>
            {/* ... (Existing form fields) */}

            <button type="submit">Submit</button>

            {/* Payment button */}
             
            <button type="submit" onClick={handlePayment} className="payment-button">
                Pay with UPI
            </button>
        </form>
    );
};

export default BillingForm;