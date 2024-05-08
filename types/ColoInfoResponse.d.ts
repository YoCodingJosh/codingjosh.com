interface ColoInfoResponse {
  /**
   * The data center where the request was served from.
   */
  colo: string;

  /**
   * The country code where the data center is located.
   */
  country?: string;

  /**
   * The city where the data center is located.
   */
  city?: string;
}
