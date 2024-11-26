# Glossary of Functions

<sub>This portion of the guide aims to outline specific functions that are asked about the most by new users of PreMiD. It is not comprehensive, but it should give new users context into what they may be looking at.</sub>

_Please note, this portion of the guide is always expanding. Alpha, Beta, and Release builds of PreMiD will continue to evolve the information contained._

## PreMiD Extension Functions

> [!NOTE]
> There will be images contained that are from development versions of PreMiD. These will not always show all of the listed functions.

![PreMiD Functions](/guide-images/gu-p1-pmsetting.png)

**Heartbeat**

- Heartbeat is a diagnostic tool. In _future versions of PreMiD_ this will show some fancy information and statistics.

**Developer Mode**

- A diagnostic and development tool. Most users will never use this. Toggling this on will open the websocket port of PreMiD.

**Sync Language**

- This option allows for the user to mandate their language settings be set between all presences based on the choice made in the PreMiD application.
- If this is not selected, the user may mandate different languages for separate presences.

**Use Playing Status**

- _[Soon to be depreciated.]_ This tells PreMiD to use "Playing" status over use "Listening" status or use another type of action.
- The extension is currently in the process of being updated. When this happens, the function will no longer exist-- as it is able to be controlled by a presence rather than the overall application.

**Prefer App**

- _[Soon to be depreciated.]_ When PreMiD utilized an application as well as an extension bundle, this would notify the extension of the application being installed on the machine, sending information to the local machine (or LocalHost) to transmit data to the application. That information would then be pushed directly to Discord. Due to Discord development and policy changes, there is unfortunately, no longer an application.
- The extension is currently in the process of being updated. When this happens, the function will no longer exist.

## Bundled Presence Functions

> [!NOTE]
> This is not a fully comprehensive list, but should give a relatively comfortable idea of how presences function with different options.

<sub>This includes the presences that are included with the application on install. Other presences available will have the same or similar options, with the same functionality.</sub>

**Privacy Mode**

- Included in almost all PreMiD presences.
- All presences with this option will function the same.
- Allows a user to hide what they are watching while still showing the specific presence application.
  - _EG: Watching Netflix for 2:49_

![YouTube Privacy](/guide-images/gu-p4-privorte.png)

**Privacy Overwrite Button**

- _YouTube Specific_
- Allows a user to implement a small eye-shaped button on the media-player that can control privacy-mode without opening the PreMiD extension.
- This can be toggled on-and-off.

**Privacy Overwrite TTL**

- _YouTube Specific_
- When using the Privacy Overwrite option, it can be set to have a total lifespan.
- Has no function if not using Privacy Mode.

**Show Live streams**

- _Twitch Specific_
- Shows information in regards to live broadcasts when on the applicable page.

**Show Movies/Series**

- _Netflix Specific_
- When enabled will show information in regards to Movies or Series while watching.

![Show Buttons](/guide-images/gu-p4-buttons.png)

**Show Buttons**

- Enable and/or disable the additional UI buttons on Discord.
- These buttons give other users the ability to easily click "Watch" or "Listen" to join-in on the currently hooked media.
- All presences with this option will function the same.

> [!IMPORTANT]
> Previously a person could see their own buttons on a secondary device. This is no longer the case. Only other users can now see buttons.

**Show Title as Presence**

- This changes the presence name from "Soundcloud" or "Netflix" to the media name.
- All presences with this option will function the same.

**Show Browsing Status**

- When enabled, will show a rich-presence when browsing a home or search page.
- All presences with this option will function the same.

## Addon Presence Functions

- I'll fill this in as I see questions. In other words: Shrug
