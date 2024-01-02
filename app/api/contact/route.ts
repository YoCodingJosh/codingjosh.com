interface ContactStatus {
  available: boolean;
  message?: string;
}

const availableMessage = "This contact form is available.";
const unavailableMessage = "This contact form is temporarily unavailable. Please try again later.";

export async function GET() {
  let contactStatus: ContactStatus | null = null;

  if (process.env.GLOBAL_CONFIG !==undefined) {
    contactStatus = await process.env.GLOBAL_CONFIG.get<ContactStatus>("contactStatus", "json");
  }

  // default to unavailable
  if (!contactStatus || !contactStatus.available) {
    const message = contactStatus?.message ?? unavailableMessage;

    const response: ContactStatus = {
      available: false,
      message,
    };

    return new Response(JSON.stringify(response), {
      status: 503
    });
  } else {
    const message = contactStatus?.message ?? availableMessage;

    const response: ContactStatus = {
      available: true,
      message,
    };

    return new Response(JSON.stringify(response));
  }
}
