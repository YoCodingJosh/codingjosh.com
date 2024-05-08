export interface ProjectDetails {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * The description of the project.
   */
  description: string;

  /**
   * The URL of the project.
   */
  url?: string;

  /**
   * The GitHub repository of the project.
   */
  repo?: string;

  /**
   * The technologies used in the project.
   */
  tech: string[];

  /**
   * The image of the project.
   */
  image?: string;

  /**
   * Whether the project is unsupported.
   */
  unsupported?: boolean;

  /**
   * Whether the project is still being worked on (ie: pre-release).
   */
  underConstruction?: boolean;

  /**
   * The custom info string to display.
   */
  customInfoString?: string;

  /**
   * The type of project.
   */
  projectType: "open-source" | "closed-source";
}
