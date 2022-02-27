import { useState,  useRef } from 'react';

import { StyledForm, Div, Label, Input, Button, P } from './Form.styles';

const Form = ({ fields, button, tableName, success: successMessage, error: errorMessage }) => {
  const formRef = useRef();
  const [feedback, setFeedback] = useState('');

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    const data = Object.assign({}, ...fields.map((field) => ({ [field.id]: document.getElementById(field.id).value })));

    await fetch('/.netlify/functions/form-submit',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "tableName": tableName,
          "fields": data,
        }),
      })
      .then((response) => response.json())
      .then((success) => setFeedback(successMessage))
      .catch((error) => setFeedback(errorMessage));
  };

  return (
    <StyledForm
      ref={formRef}
      method='POST'
      data-netlify='true'
      data-netlify-recaptcha='true'
      onSubmit={onFormSubmit}
    >
      <div data-netlify-recaptcha='true' />
      <input type='hidden' name='form-name' value={tableName} />
      {fields.map(({ id, label, type }, idx) => (
        <Div key={idx}>
          <Label htmlFor={id}>{label}</Label>
          <Input id={id} type={type} required />
        </Div>
      ))}
      <Button type='submit'>{button}</Button>
      {feedback && <P>{feedback}</P>}
    </StyledForm>
  );
};

export default Form;
