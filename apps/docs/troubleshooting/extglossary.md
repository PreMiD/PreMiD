# Glossary of Functions

<sub>This portion of the guide aims to outline specific functions that are asked about the most by new users of PreMiD. It is not comprehensive, but it should give new users context into what they may be looking at.</sub>

_Please note, this portion of the guide is always expanding. Alpha, Beta, and Release builds of PreMiD will continue to evolve the information contained._ 

## PreMiD Extension Functions

**Heartbeat** 
 - Heartbeat is a diagnostic tool. This enables developers to see information about the PreMiD extension as well as the installed presences on your machine, which allows for easier error reporting and fixing when attempting to get to the bottom of an issue. For the normal every-day user, this will have absolutely no usage. 

**Developer Mode** 
 - Another diagnostic tool for most. If you're reading this thread you will most likely never use this. When flipped on, PreMiD will send information to the service worker of your browser in a readable format that allows for easier information gathering. This isn't helpful for most users, unless you're developing a presence or helping a presence developer to diagnose an issue. 

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

_This is not a fully comprehensive list, but should give a relatively comfortable idea of how presences function with different options._

<sub>This includes Twitch, Youtube, Youtube Music, Netflix, and Spotify. These are the presences that are included with the application upon install. Other presences available will have the same or similar options, with the same functionality.</sub>

**Privacy Mode**
- Included in almost all PreMiD presences.
- All presences with this option will function the same. 
- Allows a user to hide what they are watching while still showing the specific presence application.
  - _EG: Watching Netflix for 2:49_

![YouTube Privacy](/guide-images/gu-p4-privorte.png)

**Privacy Overwrite Button**
- _YouTube Specific_
- Allows a user to impliment a small eye-shaped button on the media-player that can control privacy-mode without opening the PreMiD extension. 
- This can be toggled on-and-off. 

**Privacy Overwrite TTL**
- _YouTube Specific_
- When using the Privacy Overwrite option, it can be set to have a total lifespan.
- Has no function if not using Privacy Mode.

**Show Livestreams**
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
  - _Note: Previously a person could see their own buttons on a secondary device. This is no longer the case. Only other users can now see buttons._

**Show Title as Presence**
- This changes the presence name from "Soundcloud" or "Netflix" to the media name. 
- All presences with this option will function the same. 

**Show Browsing Status**
- When enabled, will show a rich-presence when browsing a home or search page.
- All presences with this option will function the same. 

## Addon Presence Functions
- I'll fill this in as I see questions. In other words: Shrug
