# Extension Based Issues

## Dissapearing Presences

<sub>_"My presence disappears randomly!"_</sub>

- If you **start a game, or any app Discord presence sensing picks up**-- it will take precedence over PreMiD. You will have to return to the page you were using for PreMiD and refresh it after the overwriting application is closed.
- You may also need to turn **off** presence sensing for other applications running on your computer.
- If you have multiple presences installed, you should disable the ones _not in use_, only enabling those that you are using at this point in time to troubleshoot. If the issue stops with only one presence enabled, it is likely another presence is trying to activate at the same time!
- Privacy Mode can be turned on with a _timer_ which can interfere with the long-term viewability of the app. If this happens, turn off Privacy mode or set it later than **5 hours.**
- Discord may auto-update which will overwrite a presence until the page you're using for presence is the active window and refreshed.
- You may need to reinstall your presences to get them to work. If all else fails, **disable all presences you are not currently using and reinstall the one you are.**

## App isn't working

![There is no app](/guide-images/there-is-no-app.png)

<sub>_"I can't get the app to work!/PreMiD isn't registering!"_</sub>

- There is no longer an application. Migrate to the extension only.
- If you still have the app, ensure you _uninstall_ it.
- To get PreMiD to register, go through the normal troubleshooting procedures outlined at the start of this guide.
- PreMiD (For now) only works on **websites**/**webpages** accessed from a **browser window**, or on applications that leave you with the possibility of having a localhost webpage (Kodi, VLC).
- You **CANNOT USE** desktop applications such as YouTube or Netflix. Media _must be played_ on your browser that PreMiD is installed on, from the _supported host URL's._
- You **can **use PreMiD on mobile,** as long as your browser allows you to use extensions** and you have to access the websites, not the apps.

## Buttons don't show on Discord

![Show Buttons](/guide-images/gu-p4-buttons.png)

- **You won't see buttons on your own account.** 
  - _Note: Previously a person could see their own buttons on a secondary device. This is no longer the case. Only other users can now see buttons._

## Presence hook/unhook time

<sub>_""I can't get the last video I was watching to go away!"_</sub>

- PreMiD can take up to **20 minutes** to fully unhook from a closed page.
- Previously you could install the app in-addition to the extension to decrease hook-times. This is **NO LONGER THE CASE**. This is a DISCORD delegation.
- If you want to hard-shutdown a presence, just turn the presence off and on to re-register it.
- You can also restart your Discord client and web browser to force the system to unhook, or begin a new rich-presence activity to overwrite it.
- The hook time is currently being worked on from a developer standpoint on the PreMiD side, however-- there is only so much that can be done. Discord itself has the majority of the limitations.

## Timestamps incorrect

- Ensure your presence is not in **privacy mode**. Timestamps will not reflect properly if the presence in-use is set to use this mode.
- There may be another activity interfering. Turn on and off PreMiD, and refresh the webpage being used for rich presence.
- Discord is having some timestamp bugs depending on version. Check **your account on another device**, and you may see these timestamps working properly instead of showing Elapsed Playtime.
- This is not an issue with PreMiD, but Discord. Sometimes it functions perfect, sometimes it does not. **There is nothing anyone can do about it** besides trying a refresh or restart using the above steps.

## Other issues/found a software bug.

- Reinstall PreMiD completely if you haven't already.
- You may benefit from visiting the [Official Discord Server](https://discord.premid.app/) to request help with navigating console logs and diagnosing the problem.
- You can use the [Bug Report Submission Form](https://github.com/PreMiD/Presences/issues/new?assignees=&labels=bug%2Cneeds+repro&template=bug_report.yml) and let the developers know.
