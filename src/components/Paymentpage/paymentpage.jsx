/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./paymentpage.css";
import book from "../../images/book.png";
import clock from "../../images/clock.png";
import TV from "../../images/TV.png";
import cap from "../../images/cap.png";
import ADfree from "../../images/ADfree.png";
import razor from "../../images/razor.png";

const Paymentpage = () => {
  const plans = [
    { id: 1, name: "12 Months Subscription", price: 99, discount: 0, month: 5 },
    {
      id: 2,
      name: "12 Months Subscription",
      price: 179,
      discount: 0,
      month: 15,
    },
    {
      id: 3,
      name: "6 Months Subscription",
      price: 149,
      discount: 10,
      month: 25,
    },
    {
      id: 4,
      name: "3 Months Subscription",
      price: 99,
      discount: 20,
      month: 33,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const calculateTotalPrice = () => {
    const discount = (selectedPlan.price * selectedPlan.discount) / 100;
    return selectedPlan.price - discount;
  };

  return (
    <div className="App">
      <div className="text-content">
        <h1 style={{ fontSize: "40px", marginBottom: "1px" }}>
          Access curated courses worth
        </h1>
        <div className="offer-text">
          <h1
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
              fontSize: "45px",
              marginTop: "0px",
            }}
          >
            ₹ 18,500
          </h1>
          <h1 style={{ marginTop: "0px" }}>at just</h1>
          <h1 style={{ color: "#0096FF", fontSize: "40px", marginTop: "0px" }}>
            ₹ 99
          </h1>
          <h1 style={{ marginTop: "0px" }}>per year</h1>
        </div>
        <div className="icon-text">
          <div className="icon">
            <img src={book}></img>
            <h2 style={{ color: "#0096FF" }}>100+</h2>
            <h2>Job relevant courses</h2>
          </div>
          <div className="icon">
            <img src={clock}></img>
            <h2 style={{ color: "#0096FF" }}>20,000+</h2>
            <h2>Hours of content</h2>
          </div>
          <div className="icon">
            <img src={TV}></img>
            <h2 style={{ color: "#0096FF" }}>Exclusive</h2>
            <h2>webinar access</h2>
          </div>
          <div className="icon">
            <img src={cap}></img>
            <h2>Scholarship worth</h2>
            <h2 style={{ color: "#0096FF" }}>₹94,500</h2>
          </div>
          <div className="icon">
            <img src={ADfree}></img>
            <h2 style={{ color: "#0096FF" }}>Ad Free</h2>
            <h2>learning experience</h2>
          </div>
        </div>
      </div>
      <div className="subscription">
        <div className="status">
          <div className="status-check">
            <button className="signup">1</button>
            <p>signup</p>
          </div>
          <div className="status-check">
            <button className="subscribe">2</button>
            <p>subscribe</p>
          </div>
        </div>
        <h3>Select your subscription Plan</h3>
        <div className="plan-container">
          {plans.map((plan) => (
            <label
              key={plan.id}
              className={`plan-card ${
                selectedPlan.id === plan.id ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="subscriptionPlan"
                checked={selectedPlan.id === plan.id}
                onChange={() => handlePlanClick(plan)}
              />
              <div className="inner-content">
                <div>
                  <h6>{plan.name}</h6>
                </div>
                <div className="amount">
                  <p className="price">Total ₹{plan.price.toFixed(2)}</p>
                  <p className="month">{plan.month}/mon</p>
                </div>
              </div>
            </label>
          ))}
        </div>
        <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
        <div className="buttons">
          <button className="cancel">CANCEL</button>
          <button className="pay">PROCEED TO PAY</button>
          <img src={razor}></img>
        </div>
      </div>
    </div>
  );
};

export default Paymentpage;
