# General Troubleshooting

## *PreMiD Troubleshooting Post-Installation*

### Prerequisites

- PreMiD should be installled at this point.
- You should confirm you are logged into Discord via PreMiD.
- You should have Activity Privacy > Detected Activities turned on in your Discord settings.

***If you are looking for the app/application to use with Pre, it no-longer exists and all instructions with it should be ignored.***

## *Steps For Resolving Most Issues*

### Part 1: Resetting PreMiD to Discord Hooks
- Close your web-browser fully.
- Open your web-browser again.
- Navigate to PreMiD extension, make sure you're logged in with Discord (Your icon should appear in the top right of the extension) 
- Select your user-icon in the top-right corner of the extension. 
- Select "Logout" to log out of Discord from the PreMiD extension.
- Log back in to Discord from the PreMiD extension. 
- Close and reopen your web browser again.
- Under Discord settings, navigate to **Activity Settings** > **Activity Privacy** > **Share your detected activities with others.** and ensure this setting is *on*.
- Ensure you have **no** other games or programs running that will take priority.
- Navigate to a presence-enabled site or [Click Here](https://www.youtube.com/watch?v=jNQXAC9IVRw) to test your PreMiD with YouTube. 

### **Part 2: Presence Fixing**
- Turn on your presence and ensure privacy mode is **off**
- Right-click the extension in your **browser** and go to "Manage" 
- Check under "Site access" and make sure the correct pages are enabled.

![Browser Extension Settings](/guide-images/gu-p1-browser.png)
  - You can do this with "Allow this extension to read and change all your data on websites you visit" "On click"  
 - Once you go to those pages, *click* the extension to ensure it's active for those sites. Re-load any pages after!
- Go to Settings for the plugin, click your icon and make sure "Enabled" is on
  - You can turn enabled off and on to kick it online, and press "Use Playing Status". 
  - Sometimes just turning "Use Playing Status" off and on will kickstart it after loading Discord.
- In your *web browser, fully reload all pages using PreMiD or restart the browser* 
  - Most problems can be fixed by relaunching either a web browser or Discord!
- Finally, you should see your activity. 
- If this doesn't work, flick off and on "Playing Status" and it should kick online.

### **Part 3: Kickstarts**
If **all of the above steps were followed in order:**

![YouTube Presence Settings](/guide-images/gu-p1-ytsetting.png)
- Turn Privacy mode On and Off. If using YouTube there may be an icon in the bottom of a video with a slash through an eye. Click this! Give it a moment to load and check your Discord Status. 
- Turn "Enabled" off and on.

![PreMiD Settings](/guide-images/gu-p1-pmsetting.png)
- Check the store page for your presence, as sometimes it only activates from certain web URLS.
  - *EG: Soundcloud will only work if the page listed in the presence store is from "Soundcloud.com" You cannot use other hosts!*
- Fully check your Web Extension > Manage page and ensure it is set up to work.
  - *EG: "Allow this extension to read and change all your data on websites you visit > On Specific Sites" "https://www.youtube.com/**
  - *Note*: An "*"/Asterisk is a wildcard value, meaning any page from that host can be accessed. 
- After any changes are made, it's always a good idea to close your web browser and Discord to reload.

# Issue-Specific Resolution

## *PreMiD Extension-Based Problems*

### "My Presence disappears randomly!"
- If you __start a game, or any app Discord presence sensing picks up__-- it will take precedence over PreMiD. You will have to return to the page you were using for PreMiD and refresh it after the overwriting application is closed. 
- You may also need to turn **off** presence sensing for other applications running on your computer.
- If you have multiple presences installed, you should disable the ones *not in use*, only enabling those that you are using at this point in time to troubleshoot. If the issue stops with only one presence enabled, it is likely another presence is trying to activate at the same time! 
- Privacy Mode can be turned on with a *timer* which can interfere with the long-term viewability of the app. If this happens, turn off Privacy mode or set it later than **5 hours.**
- Discord may auto-update which will overwrite a presence until the page you're using for presence is the active window and refreshed. 
- You may need to reinstall your presences to get them to work. If all else fails, **disable all presences you are not currently using and reinstall the one you are.**

### "I can't get the app to work!/PreMiD isn't registering!"
- There is no longer an application. Migrate to the extension only.
- If you still have the app, ensure you *uninstall* it.
- To get PreMiD to register, go through the normal troubleshooting procedures outlined at the start of this guide.
- PreMiD (For now) only works on **websites**/**webpages** accessed from a **browser window**, or on applications that leave you with the possibility of having a localhost webpage (Kodi, VLC).
- You **CANNOT USE** desktop applications such as YouTube or Netflix. Media *must be played* on your browser that PreMiD is installed on, from the *supported host URL's.*
- You **can **use PreMiD on mobile,** as long as your browser allows you to use extensions** and you have to access the websites, not the apps.

### "I can't see the buttons on my presence in Discord!"
- **You won't.** This is only seen on a device that isn't the one PreMiD is running on. 
- If on PC, look at yourself on your phone and vice versa.

### "The presence won't SHUT OFF!"/"The hook time is way too slow!"
- PreMiD can take up to **20 minutes** to fully unhook from a closed page. 
- Previously you could install the app in-addition to the extension to decrease hook-times. This is **NO LONGER THE CASE**. This is a DISCORD delegation.
- If you want to hard-shutdown a presence, just turn the presence off and on to re-register it.
- You can also restart both your Discord client and web browser to force the system to unhook, or begin a new rich-presence activity to overwrite it.
- The hook time is currently being worked on from a developer standpoint on the PreMiD side, however-- there is only so much that can be done. Discord itself has the majority of the limitations.

### "My Discord account isn't syncing!" (Yellow ! Error)
- Check that you do not have any antiviruses which can interfere with the port connection between PreMiD and Discord.
- Ensure you are using the *Official Discord Client* instead of a modified/forked version. Unofficial clients can have different code that PreMiD is incompatible with.
  - EG: BetterDiscord or PowerCord
- Reinstall PreMiD completely. Do this *after* disabling your AntiVirus and Firewall temporarially. (This includes Malwarebytes). Please note this is just for testing purposes. 
- You may benefit from visiting the [Official Discord Server](https://discord.premid.app/) to request help with navigating console logs and diagnosing the problem.
- If you still cannot connect to your Discord account after following the troubleshooting steps, and you are **not using a modified client** please visit the [Bug Report Submission Form](https://github.com/PreMiD/Presences/issues/new?assignees=&labels=bug%2Cneeds+repro&template=bug_report.yml) and let the developers know. 

### "My timestamps are wrong!/Eternal "Green Time" issue." 
- Discord is having some timestamp bugs depending on version. Again, check **your account on another device**, and you may see these timestamps working properly instead of showing Elapsed Playtime. 
- This is not an issue with PreMiD, but Discord. Sometimes it functions perfect, sometimes it does not. **There is nothing anyone can do about it** besides trying a refresh or restart using the above steps.

## *Media-Presence-Based Problems*

### "Netflix Thumbnails aren't working!"
- Follow the troubleshooting guide above to ensure you're fully linked between PreMiD and Discord. Most of the time this problem is caused by **privacy mode being enabled.**
- If you're having issues getting your media to register, tick **Privacy Mode** __on and off__.
- If there are settings for the Netflix presence to have a still-frame thumbnail or a media-specific one, set the option you prefer under the presence settings.
- Turn off the presence (disable the switch-box) and re-enable the presence (turn on the switch-box) 
 
### "Netflix isn't registering anything at all!"
- Close your Web Browser, Close Discord. Reopen your web browser. 
- Check your Netflix settings under the PreMiD presence extension, verifying there are no privacy settings enabled. 
- Turn off the presence (disable the switch-box) and re-enable the presence (turn on the switch-box) 
- Refresh your Netflix page. 
- Start Discord. It should hook-in. If it does not, refresh the Netflix page again. 
- If the extension is not registering Netflix  after following all steps in the FIRST section of this thread: 
  - Ensure you're waiting **15-30 SECONDS** between changes before checking your status. It can take some time to register changes.
  - Make sure the ACTIVE BROWSER PAGE is NETFLIX and the WEB URL is "Netflix.com"
- Make sure you have checked your Extension Permissions to run on that page.
  - Open Netflix, right-click the PreMiD extension and select: *PAGE ACCESS > ALWAYS RUN ON SITE*

### "YouTube Thumbnails aren't working!"
- Follow the troubleshooting guide above to ensure you're fully linked between PreMiD and Discord. Most of the time this problem is caused by **privacy mode being enabled.**
- If you're having issues getting your media to register, tick **Privacy Mode** __on and off__.
- If you have **Privacy Overwrite** enabled, turn it off.
- Go to the YouTube Presence in the extension. Ensure you have the "THUMBNAIL" setting turned ON. 

### "YouTube Isn't showing titles!"
- Open the YouTube Presence under PreMiD and do the following:
  - Turn OFF __Privacy Mode__
  - Turn OFF __Privacy Overwrite Button__
- Reload the video page. You should now see the title and timestamp after a number of seconds.

### "YouTube isn't registering anything at all!"
- Close your Web Browser, Close Discord. Reopen your web browser. 
- Check your YouTube settings under the PreMiD presence extension, verifying there are no privacy settings enabled. 
- Turn off the presence (disable the switch-box) and re-enable the presence (turn on the switch-box) 
- Refresh your YouTube page. 
- Start Discord. It should hook-in. If it does not, refresh the YouTube page again. 
- If the extension is not registering YouTube  after following all steps in the FIRST section of this thread: 
  - Ensure you're waiting **15-30 SECONDS** between changes before checking your status. It can take some time to register changes.
  - Make sure the ACTIVE BROWSER PAGE is YouTube and the WEB URL is "YouTube.com"
- Make sure you have checked your Extension Permissions to run on that page.
  - Open YouTube, right-click the PreMiD extension and select: *PAGE ACCESS > ALWAYS RUN ON SITE*

### "ALL OTHER Video & Audio Presences aren't showing my media names or images!"
- Open the Presence under PreMiD and do the following:
  - Turn OFF **Privacy Mode**
  - (If the presence has the setting) Turn OFF **Privacy Overwrite Button**
  - (Optional) Turn ON **Show Title As Presence** (This setting MAY NOT be applicable!)
- Reload the video page. You should now see the title and timestamp after a number of seconds.

### "Timestamps are not working!"
- This is either a Discord Visual Glitch, or requires some tweaking on the presence. Before panicking, check your profile on another device. It's likely working fine. 




