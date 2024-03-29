# Creating a Presence

## Introduction

PreMiD Presences are the core of the PreMiD application. They allow you to add support for your favorite websites and services, or create your own custom Presences. This guide will walk you through the process of creating a Presence for PreMiD.

Please go through the [Getting Started](./getting-started) guide before proceeding with this guide. It will help you set up your development environment and install the necessary tools.

To make the process of creating a Presence easier, we have provided a command-line interface (CLI) tool. This tool will help you generate a new Presence project with all the necessary files and configurations, so you can start coding your Presence right away.

The CLI will also help you build and test your Presence before submitting it to the PreMiD Store. Testing is required to ensure your Presence works as expected and meets the quality standards. Proof that your Presence works is required for it to be approved. This is usually done by providing a video or a screenshot of your Presence in action.

## Creating a New Presence

To create a new Presence, we will run some scripts. This will generate a new Presence project with all the necessary files and configurations. To create a new Presence, follow these steps:

1. Open your terminal and run the following command:

```sh
pnpm create
```

2. Follow the on-screen instructions to create a new Presence project.

### Coding your Presence

Once you have created a new Presence project, you can start coding your Presence. First of all, you need to understand the structure of a Presence project.

#### Presence Structure

A Presence project consists of the following files and directories:

- `metadata.json`: This file contains the metadata for your Presence, such as the name, description, and version.
- `presence.ts`: This file contains the code for your Presence. This is where you will write the logic to detect the presence of your website or service.
- `iframe.ts` (optional): This file contains the code for the Presence's iframe. This is where we will be able to interact with embedded iframes on the website.

#### Development Server

Let's start a Development Server to build and test your Presence. Follow these steps:

1. Start a development server to be able to build and test your Presence:

```sh
pnpm dev "Your Presence Name"
```

2. Open your browser and go to the PreMiD Extension settings page, then enable Developer Mode.
3. You should now see your new Presence in the list of Presences.

#### Editing the `presence.ts` File

In order to fetch the data from the website, you need to write the logic in the `presence.ts` file. We will use native JavaScript functions to fetch the data from the website. Let's see an example:

```ts
const presence = new Presence({
	clientId: "Your Client ID",
});

const enum Asset {
	Logo = "https://cdn.rcd.gg/PreMiD.png",
}

presence.on("UpdateData", async () => {
	const title = document.querySelector("title");
	const description = document.querySelector('meta[name="description"]');

	const data: PresenceData = {
		details: title.textContent,
		state: description.getAttribute("content"),
		largeImageKey: Asset.Logo,
	};

	presence.setActivity(data);
});
```

In this example, we are fetching the title and description of the website and setting them as the Presence details and state, respectively. We are also setting a custom logo as the large image key.
