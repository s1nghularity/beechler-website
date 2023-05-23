import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'react-bootstrap';

function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const [state, handleSubmit] = useForm("xyyajnbb");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '') {
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
    <div>
      {submitted ? (
        <p>Thank you for signing up! Check your email for updates.</p>
      ) : (
        <>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Button onClick={handleFormSubmit} disabled={state.submitting}>
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
}

export default EmailSignup;