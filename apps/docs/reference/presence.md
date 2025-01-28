---
outline: "deep"
---

# <div style="color:#7289da; display:inline;">class</div> Presence {#presence}

The [`Presence`](#presence) class provides an interface to interact with PreMiD's activity service, allowing you to update the user's activity. It handles connection management, activity updates, lifecycle events and translations.

```ts
class Presence {
  constructor(options: PresenceOptions);
}
```

```ts
interface PresenceOptions {
  /**
   * The unique client ID for your Discord application.
   * - 18-digit number (e.g., "909433121550790655")
   *
   * @link https://discordapp.com/developers/applications
   */
  clientId: string;

  /**
   * The `UpdateData` event will only fire when the page fully loads.
   *
   * @default false
   */
  injectOnComplete?: boolean;
}
```

::: info Legacy
The `clientId` option determines the activity's name for legacy users (pre 2.6), to be deprecated in the future.
:::

### Example

```ts
// Create a new Presence instance
const presence = new Presence({
  clientId: "514271496134389561",
});

// Listen for the UpdateData lifecycle event
presence.on("UpdateData", () => {
  // Read information from the DOM
  const videoElement = document.querySelector("video");

  const presenceData: PresenceData = {
    details: "Watching a video",
    state: videoElement.paused ? "Playback paused" : "Playing",
  };

  // Update the user's activity
  presence.setActivity(presenceData);
});
```

## setActivity(data: [`PresenceData`](#presence-data) | [`Slideshow`](#slideshow))

Updates the user's activity.

```ts{16}
const presenceData: PresenceData = {
	name: "Youtube",
	type: ActivityType.Watching,
	details: "The Best Speedtech Cup of The Day in 2024!",
	state: "WirtualTV",
	largeImageKey: "https://img.youtube.com/vi/gQ3A9Ph1Nuo/maxresdefault.jpg",
	largeImageText: "Watching a video by WirtualTV",
	smallImageKey: "https://i.imgur.com/6yp7YeO.jpeg",
	smallImageText: "WirtualTV",
	buttons: [
		{ label: "Watch", url: "https://youtu.be/gQ3A9Ph1Nuo" },
	],
};

// Update the user's activity
presence.setActivity(presenceData);
```

It can also be used with Slideshows, read more at [`createSlideshow`](#createSlideshow)

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

### PresenceData {#presence-data}

```ts
interface PresenceData {
  /**
   * Name to show in activity
   * @example "YouTube"
   * @since 2.6
   */
  name?: string;
  /**
   * Type of activity.
   *
   * @example
   * - ActivityType.Playing: "Playing [name]"
   * - ActivityType.Listening: "Listening to [name]"
   * - ActivityType.Watching: "Watching [name]"
   * - ActivityType.Competing: "Competing in [name]"
   *
   * @since 2.6
   */
  type?: ActivityType;
  /**
   * Top row of the status
   *
   * Supports:
   *
   * `String`: A string
   *
   * `Node`: An element to use (it will use `.textContent`)
   */
  details?: string | Node;
  /**
   * Bottom row of the status
   *
   * Supports:
   *
   * `String`: A string
   *
   * `Node`: An element to use (it will use `.textContent`)
   */
  state?: string | Node;
  /**
   * Timestamp in seconds or milliseconds for the start of the activity.
   * Including this will show time as "elapsed"
   */
  startTimestamp?: number | Date;
  /**
   * Timestamp in seconds or milliseconds until the end of the activity.
   * Including this will show time as "remaining" and it takes priority over startTimestamp
   */
  endTimestamp?: number | Date;
  /**
   * Will display as the large profile artwork
   *
   * Supports:
   *
   * `String`: An URL to the image or a base64 encoded image
   *
   * `Blob`: A blob of the image
   *
   * `HTMLImageElement`: An image element to use (it will be converted to a blob)
   */
  largeImageKey?: string | Blob | HTMLImageElement;
  /**
   * Will display as the small profile artwork
   *
   * Supports:
   *
   * `String`: An URL to the image or a base64 encoded image
   *
   * `Blob`: A blob of the image
   *
   * `HTMLImageElement`: An image element to use (it will be converted to a blob)
   */
  smallImageKey?: string | Blob | HTMLImageElement;
  /**
   * Tooltip for the largeImageKey
   *
   * Supports:
   *
   * `String`: A string
   *
   * `Node`: An element to use (it will use `.textContent`)
   * @since 2.6
   */
  largeImageText?: string | Node;
  /**
   * Tooltip for the smallImageKey
   *
   * Supports:
   *
   * `String`: A string
   *
   * `Node`: An element to use (it will use `.textContent`)
   */
  smallImageText?: string | Node;
  /**
   * Array of buttons, max 2, label is the button text, and url is the link
   */
  buttons?: [ButtonData, ButtonData?];
}

interface ButtonData {
  /**
   * Text for the button
   *
   * Supports:
   *
   * `String`: A string
   *
   * `Node`: An element to use (it will use `.textContent`)
   */
  label: string | Node;
  /**
   * URL of button link
   *
   * Supports:
   *
   * `String`: A string
   *
   * `HTMLAnchorElement`: An anchor element to use (it will use `.href`)
   */
  url: string | HTMLAnchorElement;
}
```

## getStrings\<T>(strings: T): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<T>

Used to fetch translations from the extension.

```ts
function getStrings<T extends Record<string, string>>(strings: T): Promise<T>;
```

::: info Translations
Check [Translations](#TODO) to add your own translations.
:::

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
