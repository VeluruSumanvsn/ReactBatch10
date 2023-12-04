import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../HeaderComponentCSS/Billing.css";

const BillingForm = () => {
  const initialFormData = {
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleInputChange = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData);
  };
  return (
    <>
      <div className="billing-container">
        <form className="billing-form" onSubmit={(e) => handleSubmit(e)}>
          <label for="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label for="address">Address</label>
          <br />
          <input
            type="text"
            placeholder="Address"
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label for="city">City</label>
          <br />
          <input
            type="text"
            placeholder="City"
            id="city"
            value={formData.city}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label for="state">State</label>
          <br />
          <input
            type="text"
            placeholder="State"
            id="state"
            value={formData.state}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label for="pincode">Pincode</label>
          <br />
          <input
            type="number"
            placeholder="Pincode"
            id="pincode"
            value={formData.pincode}
            onChange={(e) => handleInputChange(e)}
          />
        </form>
        <div className="form-button">
          <button
            type="submit"
            onClick={handleSubmit}
            className="payment-button"
          >
            Submit
          </button>
          <button>
            <Link className="text-link" to="/header">
              Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default BillingForm;
