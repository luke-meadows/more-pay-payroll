import { useState } from 'react';
import styled from 'styled-components';
import { handleSubmit } from '../lib/ContactFormSubmit';
import useForm from '../lib/useForm';
import { Button } from './Header';
export default function ContactForm() {
  const [sending, setSending] = useState();
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    message: '',
  });
  return (
    <FormContainer>
      <h3>Send a contact request</h3>
      <form
        action="submit"
        onSubmit={(e) => handleSubmit(e, inputs, clearForm, setSending)}
      >
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={handleChange}
          value={inputs.name}
          type="text"
          placeholder="Your name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Message..."
          onChange={handleChange}
          value={inputs.message}
          required
        />
        <p>
          By continuing, I accept MorePay's{' '}
          <span> data protection policy.</span>
        </p>
        <Button disabled={sending} type="submit">
          Submit
        </Button>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  margin-top: 4rem;
  box-shadow: var(--bs);
  padding: 4rem;
  width: 50%;
  margin-left: 10rem;
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin-left: 0rem;
  }
  h3 {
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
    margin-bottom: 4rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      margin-bottom: 0.5rem;
      color: var(--dark-gray);
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.3rem;
    }
    input,
    textarea {
      margin-bottom: 2rem;
      padding: 1rem 0.5rem;
      border: 1px solid var(--light-gray);
      border-radius: 0.3rem;
      font-family: 'Futura PT';
    }

    textarea {
      height: 8rem;

      margin-bottom: 1rem;
    }
    p {
      margin: 0;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      span {
        color: var(--medium-green);
        text-decoration: underline;
      }
    }
  }
  button[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;
