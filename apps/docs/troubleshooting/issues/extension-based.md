# Extension Based Issues

## Dissapearing Presences

<sub>_"My presence disappears randomly!"_</sub>

- If you **start a game, or any app Discord presence sensing picks up**-- it will take precedence over PreMiD. You will have to return to the page you were using for PreMiD and refresh it after the overwriting application is closed.
- You may also need to turn **off** presence sensing for other applications running on your computer.
- If you have multiple presences installed, you should disable the ones _not in use_, only enabling those that you are using at this point in time to troubleshoot. If the issue stops with only one presence enabled, it is likely another presence is trying to activate at the same time!
- Privacy Mode can be turned on with a _timer_ which can interfere with the long-term viewability of the app. If this happens, turn off Privacy mode or set it later than **5 hours.**
- Discord may auto-update which will overwrite a presence until the page you're using for presence is the active window and refreshed.
- You may need to reinstall your presences to get them to work. If all else fails, **disable all presences you are not currently using and reinstall the one you are.**

## App Not Working

![There is no app](/guide-images/there-is-no-app.png)

<sub>_"I can't get the app to work!/PreMiD isn't registering!"_</sub>

- There is no longer an application. Migrate to the extension only.
- If you still have the app, ensure you _uninstall_ it.
- To get PreMiD to register, go through the normal troubleshooting procedures outlined at the start of this guide.
- PreMiD (For now) only works on **websites**/**webpages** accessed from a **browser window**, or on applications that leave you with the possibility of having a localhost webpage (Kodi, VLC).
- You **CANNOT USE** desktop applications such as YouTube or Netflix. Media _must be played_ on your browser that PreMiD is installed on, from the _supported host URL's._
- You **can **use PreMiD on mobile,** as long as your browser allows you to use extensions** and you have to access the websites, not the apps.

## Buttons Shown In Discord

![Show Buttons](/guide-images/gu-p4-buttons.png)

- **You won't see buttons on your own account.** 

> [!IMPORTANT]
> Previously a person could see their own buttons on a secondary device. This is no longer the case. Only other users can now see buttons. 

## Presence Hook/Unhook Time

<sub>_""I can't get the last video I was watching to go away!"_</sub>

- PreMiD can take up to **20 minutes** to fully unhook from a closed page.
- Previously you could install the app in-addition to the extension to decrease hook-times. This is **NO LONGER THE CASE**. The application was too-limited in scope and caused more issues than necessary.
- If you want to hard-shutdown a presence, just turn the presence off and on to re-register it.
- You can also restart your Discord client and web browser to force the system to unhook, or begin a new rich-presence activity to overwrite it.
- The hook time is currently being worked on from a developer standpoint on the PreMiD side, however-- there is only so much that can be done. Discord itself has the majority of the limitations.

## Timestamps Incorrect

- Ensure your presence is not in **privacy mode**. Timestamps will not reflect properly if the presence in-use is set to use this mode.
- There may be another activity interfering. Turn on and off PreMiD, and refresh the webpage being used for rich presence.
- Discord is having some timestamp bugs depending on version. Check **your account on another device**, and you may see these timestamps working properly instead of showing Elapsed Playtime.
- In some cases this is an issue with Discord. Sometimes it functions perfect, sometimes it does not. **There is nothing anyone can do about it** besides trying a refresh or restart using the above steps.

## Advanced Troubleshooting

_This section assumes a general knoweledge of how to access your browser's extension menu. There is a vague informational guide to do this located under The [Manual Install](../manual-install.md#manually-installingno-extension-store/manual-install.md) section._

- You should attempt to install PreMiD on another browser to test for functionality.
  - If PreMiD <ins>is</ins> functional in another browser, this isolates the issue to your web-browser. Further troubleshooting should be done on the browser itself. 
    - Restart the browser, if you have not.
    - Clear your browser cache/cookies/history.
    - Update your browser, ensuring it is on the most updated version.
    - Ensure the PreMiD extension is fully up-to-date.
    - On the webpage being used to test your presence detection, use ***CTRL+F5*** to hard-refresh the page, or duplicate the tab whenever changes are made.
    - Under Extensions, disable all extensions except PreMiD and test for hooking ability. If you ***are*** able to use PreMiD after this point, begin enabling Extensions one-by-one until the conflict is located.

> [!IMPORTANT]
> If you come across any kind of incompatibility between extensions while using this guide, it is **highly encouraged** to submit a [Bug Report](https://github.com/PreMiD/Presences/issues/new?assignees=&labels=bug%2Cneeds+repro&template=bug_report.yml). **Issues unknown to developers are unable to be investigated, and not all extensions can be tested for compatibility**

  - If PreMiD <ins>is not</ins> functional in another browser (preferably a more-utilized one such as Chrome, Firefox, Edge, etc.) check the version of the extension is up-to-date, all browsers are up-to-date, and restart the machine.
    - Update Discord, if able.
    - Update the operating system if there are pending updates.
    - Check for any alerts under prorgams such as Windows Defender, Malwarebytes, and similar. 
    - (Optional) Run a system scan in your antivirus of choice. While not typical, a system issue may cause bugs in other software.

If after all steps are exhausted no change is seen, it is encouraged to notate your troubleshooting steps as well as software versions and send a [Bug Report](https://github.com/PreMiD/Presences/issues/new?assignees=&labels=bug%2Cneeds+repro&template=bug_report.yml), or visit the [Official Discord Server](https://discord.premid.app/) to explore more in-depth solutions.

## Other Issue/Software Bugs

- Reinstall PreMiD completely if you haven't already.
- You may benefit from visiting the [Official Discord Server](https://discord.premid.app/) to request help with navigating console logs and diagnosing the problem.
- You can use the [Bug Report Submission Form](https://github.com/PreMiD/Presences/issues/new?assignees=&labels=bug%2Cneeds+repro&template=bug_report.yml) and let the developers know.
