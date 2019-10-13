export default interface ExtensionSettings {
  /**
   * If extension is enabled
   */
  enabled: boolean;
  /**
   * Autolaunch enabled
   */
  autoLaunch: boolean;
  /**
   * Media keys enabled
   */
  mediaKeys: boolean;
  /**
   * title menubar (TrayTitle)
   */
  titleMenubar: boolean;
  /**
   * language of extension
   */
  language: string;
}
