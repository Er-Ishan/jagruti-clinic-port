import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase.js"; // adjust path

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    age: "",
    condition: "",
    symptoms: "",
    consultationTime: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "consultations"), {
        ...formData,
        createdAt: Timestamp.now()
      });
      alert("Consultation booked successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        whatsapp: "",
        age: "",
        condition: "",
        symptoms: "",
        consultationTime: ""
      });
    } catch (error) {
      console.error("Error saving consultation: ", error);
      alert("Failed to book consultation. Please try again.");
    }
  };

  return (
    <section className="consultation-section">
      <div className="consultation-container">
        {/* Left Column - Form */}
        <div className="form-section">
          <h2>Book Your Consultation</h2>
          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label>WhatsApp Number *</label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Age</label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                >
                  <option>Select Age Range</option>
                  <option>Below 18</option>
                  <option>18 - 30</option>
                  <option>31 - 45</option>
                  <option>46 - 60</option>
                  <option>Above 60</option>
                </select>
              </div>
              <div className="form-group">
                <label>Primary Health Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option>Select Condition</option>
                  <option>Allergy</option>
                  <option>Skin Problem</option>
                  <option>Hair Loss</option>
                  <option>Respiratory Issue</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Describe Your Symptoms</label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder="Please describe your symptoms..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Preferred Consultation Time</label>
              <input
                type="time"
                name="consultationTime"
                value={formData.consultationTime}
                onChange={handleChange}
                required
                step="900"
              />
            </div>

            <button type="submit" className="submit-btn secondary-bg">
              Start Healing Now
            </button>
          </form>
        </div>

        {/* Right Column - Info */}
        <div className="info-section">
          <div className="info-card">
            <h3>How It Works</h3>
            <ul>
              <li className="text-dark">
                Book your consultation with your details.
              </li>
              <li className="text-dark">
                Comprehensive evaluation of your symptoms.
              </li>
              <li className="text-dark">Personalized homeopathic treatment.</li>
              <li className="text-dark">Follow-up & progress monitoring.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>What You Get</h3>
            <ul>
              <li className="text-dark">60-minute detailed consultation</li>
              <li className="text-dark">Personalized remedy prescription</li>
              <li className="text-dark">Lifestyle & dietary recommendations</li>
              <li className="text-dark">Follow-up support via WhatsApp</li>
              <li className="text-dark">Follow-up support via call</li>
            </ul>
          </div>

          <div className="fee-card">
            <h3>Consultation Fee</h3>
            <p className="fee text-dark">
              <strong>₹500</strong> — First Consultation
            </p>
            <p className="fee text-dark">
              <strong>₹300</strong> — Follow-up Consultations
            </p>
            <button className="secure-btn secondary-bg">Secure payment soon</button>
          </div>
        </div>
      </div>

      {/* Keep your existing CSS */}
      <style jsx>{`
        .consultation-section {
          padding: 60px 20px;
          background: #f8f9fa;
          border-radius: 20px;
        }

        .consultation-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .form-section {
          flex: 1 1 58%;
          background: #fff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .info-section {
          flex: 1 1 38%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card,
        .fee-card {
          background: #d5d8e8;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        h2,
        h3 {
          margin-bottom: 15px;
          color: #1a1a1a;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 18px;
        }

        li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: green;
        }

        .form-row {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        input,
        select,
        textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: #0c6b47;
        }

        textarea {
          resize: none;
          min-height: 100px;
        }

        .submit-btn {
          color: #fff;
          padding: 12px 20px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
          width: 100%;
        }

        .fee-card {
          background: #d5d8e8;
          color: white;
          text-align: center;
        }

        .fee {
          margin: 8px 0;
        }

        .secure-btn {
          background: #084b31;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }

        @media (max-width: 992px) {
          .consultation-container {
            flex-direction: column;
          }

          .form-section,
          .info-section {
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .form-row {
            flex-direction: column;
          }

          .submit-btn {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default BookConsultation;
