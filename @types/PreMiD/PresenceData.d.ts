import * as Discord from "discord-rpc";

export default interface PresenceData {
  /**
   * Client ID of presence
   */
  clientId: string;
  /**
   * Tray title to be shown in Mac OS tray
   */
  trayTitle: string;
  /**
   * service name of presence
   * @deprecated
   */
  service: string;
  /**
   * Determines if the service is currently playing something back or not, if false it will automatically hide after 1 minute
   */
  playback: boolean;
  /**
   * Discord Presence which gets sent directly to Discord app
   */
  presenceData: Discord.Presence;
  /**
   * Determines if the service should be hidden (clearActivity)
   */
  hidden: boolean;
  /**
   * Determines if the service is mediaKey able / uses them
   */
  mediaKeys: boolean;
}
