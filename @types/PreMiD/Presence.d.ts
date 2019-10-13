import * as Discord from "discord-rpc";

export default interface Presence {
  /**
   * Client ID of presence
   */
  clientId: string;
  /**
   * Rich Procedual call connection
   */
  rpc: Discord.Client;
  /**
   * Connection ready?
   */
  ready: Boolean;
}
