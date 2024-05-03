/**
 * Interface for the Contact Page (Status) data stored in Cloudflare KV as JSON.
 */
interface ContactPageStatus {
  /**
   * Whether the contact page is available.
   */
  available: boolean;

  /**
   * Message to display on the contact page if it is not available.
   */
  message?: string;
}
