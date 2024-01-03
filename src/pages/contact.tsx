import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [contactServiceAvailable, setContactServiceAvailable] = useState(false);
  const [contactServiceUnavailableMessage, setContactServiceUnavailableMessage] = useState('');

  useEffect(() => {
    // call our /contact endpoint (GET) to see if the service is available
    fetch('/api/contact')
      .then(async (res) => {
        const message = await res.text();

        if (res.status === 200) {
          // if it is, then we can show the Turnstile
          console.log(message ?? 'Contact service is available.');
          setContactServiceAvailable(true); // set state to true if service is available
        } else {
          // if it is not, then we can hide the Turnstile
          console.log(message ?? 'Contact service is not available.');
          setContactServiceAvailable(false); // set state to false if service is not available
          setContactServiceUnavailableMessage(message);
        }
      })
      .catch((err) => {
        // if it is not, then we can hide the Turnstile
        console.log(err ?? 'Contact service is not available.');
        setContactServiceAvailable(false); // set state to false if there is an error
      });
  }, [])

  const turnstileSiteKey: string = customFields.turnstileSiteKey as string;

  return (
    <Layout title="Contact">
      {contactServiceAvailable && (
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
      )}
      {!contactServiceAvailable && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
          }}>
          <h1>
            {contactServiceUnavailableMessage}
          </h1>
        </div>
      )}
    </Layout>
  );
}
