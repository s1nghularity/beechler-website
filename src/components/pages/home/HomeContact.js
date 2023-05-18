import "../../../styles/theme.css";
import "../../../styles/HomeContact.css";

import React, {useEffect} from 'react';
import { useForm, ValidationError  } from '@formspree/react';
import { Card, Modal, Button } from 'react-bootstrap';

function HomeContact() {
  const [showModal, setShowModal] = React.useState(false);
  const [state, handleSubmit] = useForm("xyyajnbb");
  
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleClose = () => setShowModal(false);

  return (
    <div className='contact-container stripe-home-dealer' id='contact'>
      <div className='work-together'>
        <h2>Can't find what you're looking for?</h2>
        <p>Reach out through this contact form!</p>
        <img alt='contact-img' />
      </div>
      <Card className='contact-form'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> <br/><br/>
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        We'll get back to you ASAP
      </button>

      <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks for reaching out.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Our team wil get back to you as soon as possible.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    </form>
      </Card>
    </div>
  );
};

export default HomeContact;
