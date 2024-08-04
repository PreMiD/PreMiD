---
outline: "deep"
---

# Presence

The [`Presence`](#presence) class represents a client, which can be used to interact with the PreMiD extension.

It also provides lifecycle events via [`UpdateData`](#update_data) and [`iFrameData`](#iframe_data).

### Creating a client

```ts
// Create a new Presence instance
const presence = new Presence({
  clientId: "514271496134389561", // [!code warning] determines the activity's name (pre 2.6)
});

// Listen for the UpdateData lifecycle event
presence.on("UpdateData", () => {
  // Read information from the DOM
  const videoElement = document.querySelector("video");

  const presenceData: PresenceData = {
    details: "Watching a video",
    state: videoElement.paused ? "Playback paused" : "Playing",
  };

  // use setActivity to update the user's activity
  presence.setActivity(presenceData);
});
```

## constructor(options: [`PresenceOptions`](#presence-options)) {#constructor}

## setActivity(data: [`PresenceData`](#presence-data) | [`Slideshow`](#slideshow))

The main way to update the user's activity.

It can also be used with Slideshows, read more at [`createSlideshow`](#createSlideshow)

```ts{16}
const presenceData: PresenceData = {
	name: "Youtube",
	type: ActivityType.Watching,
	details: "The Best Speedtech Cup of The Day in 2024!",
	state: "WirtualTV",
	largeImageKey: "<thumbnail_url>",
	largeImageText: "Watching a video by WirtualTV",
	smallImageKey: "<channel_pic>",
	smallImageText: "WirtualTV",
	buttons: [
		{ label: "Watch", url: "https://youtu.be/gQ3A9Ph1Nuo" },
	],
};

// Update the user's activity
presence.setActivity(presenceData);
```

::: details Example with Slideshow

```ts
// Creates a new slideshow
const slideshow = presence.createSlideshow();

// Defines two activities for the slideshow
const likesPresence = { details: "Video has 1.2k likes!" };
const viewsPresence = { details: "Video has 80k views!" };

// Add the two activities with 5 seconds intervals
slideshow.addSlide("likeCounter", likesPresence, 5000);
slideshow.addSlide("viewsCounter", viewsPresence, 5000);

// Update the user's activity, toggling between the two every 5 seconds
presence.setActivity(slideshow);
```

For more details check [Slideshow](#TODO)
:::

## getStrings(strings: Record\<string,string\>)

Used to fetch translations from the extension.

a list of translations can be found in the [Translations Repository](#TODO)

to add your own custom translations check [Custom Translations](#TODO)

```ts
// type definition
function getStrings<T extends Record<string, string>>(strings: T): Promise<T>;
```

Example

```ts {7-9}
const strings = await presence.getStrings({
  playing: "general.playing",
  paused: "general.paused",
  search: "general.search",
}); // { playing: "Playing", paused: "Paused", search: "Searching" }

console.log(strings.paused); // EN: Paused
console.log(strings.playing); // DE: Spielt
console.log(strings.search); // RU: Ищет
```

## clearActivity()

Clears the user's activity, can be used when the user is idle (e,g: video paused)

Example

```ts{4-5}
presence.on("UpdateData", () => {
    const videoElement = document.querySelector("video");

	// if the video is paused, clear the user's activity
	if (videoElement.paused) return presence.clearActivity();

    const presenceData: PresenceData = {
        details: "Watching a video",
    };

    presence.setActivity(presenceData);
});

```

## [`Presence Options`](#presence-options)

Options that change the behavior of the presence

### [`clientId`](#clientId)

- **Type:** `string`
- **Required**

This property is used for legacy users running the PreMiD application ([`Prefer App`](#prefer-app))

You can get the `clientId` by making a new application in the [Discord Developer Portal](https://discordapp.com/developers/applications)

> [!NOTE]
> Make sure to use the name of the service, as it's displayed for legacy users.
