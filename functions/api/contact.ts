interface Env {
  TURNSTILE_SITE_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  GLOBAL_CONFIG: KVNamespace;
}

interface ContactStatus {
  available: boolean;
  message?: string;
}

const availableMessage = "This contact form is available.";
const unavailableMessage = "This contact form is temporarily unavailable. Please try again later.";

export const onRequestGet: PagesFunction<Env> = async (context) => {
  let contactStatus: ContactStatus | undefined = undefined;

  if (context.env.GLOBAL_CONFIG != undefined) {
    contactStatus = await context.env.GLOBAL_CONFIG.get<ContactStatus | undefined>('contactStatus', 'json');
  }

  // default to unavailable
  if (!contactStatus || !contactStatus.available) {
    const message = contactStatus?.message ?? unavailableMessage;

    return new Response(message, {
      status: 503,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } else {
    const message = contactStatus?.message ?? availableMessage;

    return new Response(message, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let contactStatus: ContactStatus | undefined = undefined;

  if (context.env.GLOBAL_CONFIG != undefined) {
    contactStatus = await context.env.GLOBAL_CONFIG.get<ContactStatus | undefined>('contactStatus', 'json');
  }

  // default to unavailable
  if (!contactStatus || !contactStatus.available) {
    const message = contactStatus?.message ?? unavailableMessage;

    return new Response(`{ "message": "${message}", "status": "OK" }`, {
      status: 503,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  // TODO: verify turnstile
  let response = new Response(`{ "status": "OK" }`, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
