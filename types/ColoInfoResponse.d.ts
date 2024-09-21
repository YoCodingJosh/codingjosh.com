interface ColoInfoResponse {
  /**
   * The data center where the request was served from. (IATA code)
   */
  colo: string;

  /**
   * The country code where the data center is located.
   */
  country?: string;

  /**
   * The region where the data center is located. (State, Province, etc.)
   */
  region?: string;

  /**
   * The city where the data center is located.
   */
  city?: string;
}
