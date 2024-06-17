export default interface HeaderLink {
  /**
   * The text to display in the header link.
   */
  text: string;

  /**
   * The URL to link to.
   */
  to?: string;

  /**
   * Sub-links to display in a dropdown.
   */
  content?: HeaderLink[];
}
