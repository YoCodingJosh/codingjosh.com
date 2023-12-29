// # Contact Me

// Here you can send me a message. I will try to answer as soon as possible.

// ## Code of Conduct:
// - If you are trying to sell me something, please don't. I am not interested.
//   - **You will be marked as spam.**
// - If you are trying to hire me, I don't know yet lol.

// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// const { siteConfig: {customFields} } = useDocusaurusContext();

import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  useEffect(() => {
    // call our /contact endpoint (GET) to see if the service is available
    fetch('/api/contact')
      .then((res) => {
        if (res.status === 200) {
          // if it is, then we can show the Turnstile
          console.log(res.text ?? 'Contact service is available.');
        } else {
          // if it is not, then we can hide the Turnstile
          console.log(res.text ?? 'Contact service is not available.');
        }
      })
      .catch((err) => {
        // if it is not, then we can hide the Turnstile
        console.log(err ?? 'Contact service is not available.');
      });
  }, [])

  const turnstileSiteKey: string = customFields.turnstileSiteKey as string;

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
