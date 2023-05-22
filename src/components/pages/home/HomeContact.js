import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, Button } from 'react-bootstrap';

function HomeContact() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm("xyyajnbb");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || message.trim() === '') {
      return;
    }

    try {
      await handleSubmit(e);
      if (state.succeeded) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="contact-container stripe-home-dealer" id="contact">
      {submitted ? (
        <div className="message-section">
          <p>Thank you for connecting! Someone from the team will get back to you soon.</p>
        </div>
      ) : (
        <Card className="contact-form">
          <h2>Can't find what you're looking for?</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <br /><br />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting}>
              We'll get back to you ASAP
            </button>
          </form>
        </Card>
      )}
    </div>
  );
}

export default HomeContact;
