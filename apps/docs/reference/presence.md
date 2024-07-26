# Presence


The [`Presence`](#presence) class represents a client, which can be used to interact with the PreMiD extension.


It also provides lifecycle events via [`UpdateData`](#update_data) and [`iFrameData`](#iframe_data).

### Creating a client


```ts
const presence = new Presence({
    clientId: "514271496134389561",
});

presence.on("UpdateData", () => {
    const videoElement = document.querySelector("video");

    const presenceData: PresenceData = {
        details: "Watching a video",
        state: videoElement.paused ? "Playback paused" : "Playing",
    };

    presence.setActivity(presenceData);
});
```
## Constructors

### constructor(options: [`PresenceOptions`](#presence-options)) 

## Methods


### setActivity(data: [`PresenceData`](#presence-data) | [`Slideshow`](#slideshow)): Promise\<void\>

Sets the presence activity and sends it to the application.


::: details PresenceData {open}
```ts
const [startTimestamp, endTimestamp] = presence.getTimestamps(video.currentTime, video.duration);

presence.setActivity({
    name: 'Youtube',
    type: ActivityType.Watching,
    details: 'The Best Speedtech Cup of The Day in 2024!',
    state: 'WirtualTV',
    largeImageKey: "<thumbnail_url>",
    largeImageText: "Watching a video by WirtualTV",
    smallImageKey: "<channel_pic>",
    smallImageText: "WirtualTV",
    buttons: [{ label: 'Watch', url: 'https://www.youtube.com/watch?v=gQ3A9Ph1Nuo' }],
    startTimestamp,
    endTimestamp,
});
```
:::





## Presence Options
Options that change the behavior of the presence

### [`clientId`](#clientId)

- **Type:** `string`
- **Required** 

This property is required to make your presence work, because it uses your application id to display its logo and assets.
You can get it on your [applications page](https://discordapp.com/developers/applications)

### [`injectOnComplete`](#injectOnComplete) 

- **Type:** `boolean | undefined`

The [`UpdateData`](#update_data) event for both the presence and the iframe
will only be fired when the page has fully loaded.