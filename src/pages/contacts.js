import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image'

import Layout from '@sqill/components/layout';

import { Section, Wrapper, H1, Div } from '@sqill/components/pages/contacts.styles';

const Contacts = () => {
  const { t } = useTranslation('contacts');
  const formRef = useRef();
  const meta = t('meta');
  const form = t('header.form');

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    const data = new FormData(formRef.current);
    console.log('ev', ev, data, formRef.current);
    const aux = form.fields.map((field) => ({ [field.id]: document.getElementById(field.id).value }));
    console.log('aux', aux);
    // await (await fetch('/.netlify/functions/form-submit')).json();
    await fetch('/.netlify/functions/form-submit',
      {
        method: 'POST',
        body: {
          "tableName": "4pros",
          "fields": {
            "Name": "Andre",
            "Email": "test",
          },
        },
      })
      .then(response => response.json())
      .then(success => console.log('s:', success))
      .catch(error => console.log('e:', error));
    // const name = ev.target.name.value;
    // const res = await fetch(`https://api.agify.io/?name=${name}`);
    // const result = await res.json();
    // alert(`Hi ${name} your age is most likely: ${result.age}`);
  };

  return (
    <Layout {...meta}>
      <Section>
        <Wrapper>
          <H1>
            <Image src='/images/logo_gradient.svg' alt='sqill logo' width={80} height={80} />
            {t('header.title')}
          </H1>
          {/* <form method='POST' data-netlify='true' onSubmit={onFormSubmit}> */}
          <form ref={formRef} onSubmit={onFormSubmit}>
            {form.fields.map(({ id, label, type }, idx) => (
              <div key={idx}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} />
              </div>
            ))}
            <button type='submit'>{form.button}</button>
          </form>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['menu', 'footer', 'contacts']),
  },
});

export default Contacts;
