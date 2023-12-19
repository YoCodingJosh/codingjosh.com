// # Contact Me

// Here you can send me a message. I will try to answer as soon as possible.

// ## Code of Conduct:
// - If you are trying to sell me something, please don't. I am not interested.
//   - **You will be marked as spam.**
// - If you are trying to hire me, I don't know yet lol.

// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// const { siteConfig: {customFields} } = useDocusaurusContext();

import React from 'react';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Turnstile } from '@marsidev/react-turnstile';

function Contact() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const turnstileSiteKey: string = customFields.turnstileSiteKey as string;

  console.log(turnstileSiteKey);

  return (
    <Layout title="Contact">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <h1>Contact Me</h1>
        <p>
          This is a very basic contact page. Please replace this with your own content.
        </p>
        <Turnstile siteKey={turnstileSiteKey} />
      </div>
    </Layout>
  );
}

export default Contact;
