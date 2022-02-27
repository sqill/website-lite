import { useRef } from 'react';

import { StyledForm, Div, Label, Input, Button } from './Form.styles';

const Form = ({ fields, button, tableName, success, error }) => {
  const formRef = useRef();

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
      .then(response => response.json())
      .then(success => console.log('s:', success))
      .catch(error => console.log('e:', error));
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
    </StyledForm>
  );
};

export default Form;
