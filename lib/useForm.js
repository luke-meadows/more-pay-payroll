import { useState } from 'react';

export default function useForm({ initial = {} }) {
  const [inputs, setInputs] = useState({ ...initial });
  function handleChange(e) {
    const { name, value, type } = e.target;
    setInputs({ ...inputs, [name]: value });
  }
  return {
    inputs,
    handleChange,
  };
}
