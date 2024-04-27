/**
 * Interface for the Contact Page (Status) data stored in Cloudflare KV as JSON.
 */
interface ContactPageStatusKV {
  /**
   * Whether the contact page is available.
   */
  available: boolean;

  /**
   * Message to display on the contact page if it is not available.
   */
  message?: string;
}

/**
 * Interface for the response from the Contact Page (Status) API.
 */
interface ContactPageStatusResponse {
  message: string;
}
