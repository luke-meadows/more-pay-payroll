import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'range') value = parseInt(value);
    setInputs({ ...inputs, [name]: value });
  }
  function clearForm() {
    const newObj = Object.fromEntries(
      Object.keys(inputs).map((key) => [[key], ''])
    );
    setInputs(newObj);
  }
  return {
    inputs,
    handleChange,
    clearForm,
  };
}
