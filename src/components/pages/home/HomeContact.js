import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card } from 'react-bootstrap';

function HomeContact() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');

  const categoryOptions = {
    "Beechler Diamond": ["B07", "B10", "B11", "B12", "B14", "B16"],
    "Beechler Tonalex": ["B17", "B18", "B20", "B21", "B19"],
    "Beechler Bellite": ["B80", "B81", "B82", "B83", "C31", "C32", "C33", "C34"],
    "Beechler Hard Rubber": ["B25", "B25/C", "B26", "B26/C", "B22", "B28", "B29"],
    "Beechler Customized": ["C21", "C22", "C24", "C27", "C26"],
    "ARB Metal": ["A81", "A82", "A83", "C12", "C13", "C14"],
    "ARB Great Neck Originals": ["A29", "A30", "C15", "C16"],
    "Accessories & Services": ["T01Arb", "T02Beechler", "T02Arb/Beechler", "P01", "P02", "P03", "L01/A", "L01/B", "L01/P", "L50/B", "L50/C", "L50/G", "L52", "L53", "BP", "CE", "LC", "M03", "R"],
  };

  const [state, handleSubmit] = useForm("xyyajnbb");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || message.trim() === '' || category.trim() === '' || id.trim() === '') {
      return;
    }

    try {
      await handleSubmit(e);
      if (state.succeeded) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-container stripe-home-dealer" id="contact" role="region" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Us</h2>
      {submitted ? (
        <div className="message-section" role="alert">
          <h3>Thank you for reaching out!</h3>
          <p>Someone from the team will get back to you soon.</p>
        </div>
      ) : (
        <Card className="contact-form" role="form" itemScope itemType="https://schema.org/ContactPage">
          <h3 itemProp="headline">Can't find what you're looking for?</h3>
          <form onSubmit={handleFormSubmit} aria-label="Contact Form">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-required="true"
              itemProp="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <br /><br />
            <label htmlFor="category">Interested in</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
              aria-required="true"
              itemProp="category"
            >
              <option value="">Select a category</option>
              {Object.keys(categoryOptions).map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <br /><br />
            <label htmlFor="id">Product ID</label>
            <select
              id="id"
              name="id"
              value={id}
              onChange={e => setId(e.target.value)}
              required
              aria-required="true"
              itemProp="productID"
            >
              <option value="">Select a category first</option>
              {category ? categoryOptions[category].map((option, index) => (
                <option key={index} value={option}>{option}</option>
              )) : null}
            </select>
            <br /><br />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              aria-required="true"
              itemProp="text"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} itemProp="potentialAction">
              Contact Us
            </button>
            <p className="disclaimer" itemProp="disclaimer">We will never sell your personal information.</p>
          </form>
        </Card>
      )}
    </div>
  );
}


export default HomeContact;
