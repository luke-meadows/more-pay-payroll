import { useState } from 'react';

export default function useForm({ initial = {} }) {
  const [inputs, setInputs] = useState({ ...initial });
  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'range') value = parseInt(value);
    setInputs({ ...inputs, [name]: value });
  }
  return {
    inputs,
    handleChange,
  };
}
