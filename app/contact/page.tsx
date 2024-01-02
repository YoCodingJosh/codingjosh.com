"use server";

import { headers } from 'next/headers';
import TurnstileWrapper from "@/components/TurnstileWrapper";

interface ContactServiceAvailabilityResponse {
  available: boolean;
  message?: string;
};

async function checkContactService(): Promise<ContactServiceAvailabilityResponse> {
  const requestHeaders = headers();

  const host = requestHeaders.get('host');
  const protocol = requestHeaders.get('x-forwarded-proto') || 'http';

  const res = await fetch(`${protocol}://${host}/api/contact`);
  const response = await res.json<ContactServiceAvailabilityResponse>();

  if (res.status === 200 || res.status === 503) {
    // look at the response body to determine if the contact service is available
    return response;
  } else {
    return {
      available: false,
      message: "Unable to determine if the contact service is available.",
    };
  }
}

export default async function Index() {
  const { available: contactServiceAvailable, message: contactServiceUnavailableMessage } = await checkContactService();

  return (
    <main>
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
          <TurnstileWrapper />
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
    </main>
  )
};
