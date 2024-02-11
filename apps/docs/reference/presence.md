# Presence Class

The `Presence` class is the main class used to create a Presence.

## Overview

The `Presence` class is the main class used to create a Presence. It is used to interact with the PreMiD Extension.

### Example

```javascript
const presence = new Presence({
	clientId: "<Your Client ID>",
});

presence.on("UpdateData", () => {
	// Logic to update the presence data

	presence.setActivity({
		details: "Example Presence",
		state: "Example State",
	});
});
```

## Constructor

### `new Presence(options: PresenceOptions)`

Creates a new `Presence` instance.

#### Parameters

- `options` (`PresenceOptions`): The options for the Presence.

#### Returns

- `Presence`: The new `Presence` instance.

## Properties

### `clientId: string`

The Client ID of the Presence.

## Methods

### `setActivity(activity: PresenceActivity)`

Sets the activity of the Presence.

#### Parameters

- `activity` (`PresenceActivity`): The activity to set.

### `clearActivity()`

Clears the activity of the Presence.

### `on(event: string, listener: Function)`

Adds a listener to an event.

#### Parameters

- `event` (`string`): The event to listen to.

- `listener` (`Function`): The listener to add.
