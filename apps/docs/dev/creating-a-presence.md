# Creating a Presence

## Introduction

PreMiD Presences are the core of the PreMiD application. They allow you to add support for your favorite websites and services, or create your own custom Presences. This guide will walk you through the process of creating a Presence for PreMiD.

Please go through the [Getting Started](./getting-started) guide before proceeding with this guide. It will help you set up your development environment and install the necessary tools.

To make the process of creating a Presence easier, we have provided the `pmd` command-line interface (CLI) tool. This tool will help you generate a new Presence project with all the necessary files and configurations, so you can start coding your Presence right away.

The `pmd` CLI will also help you build and test your Presence before submitting it to the PreMiD Store. Testing is required to ensure your Presence works as expected and meets the quality standards. Proof that your Presence works is required for it to be approved. This is usually done by providing a video or a screenshot of your Presence in action.

## Creating a New Presence

To create a new Presence, you can use the `pmd` CLI tool. This tool will generate a new Presence project with all the necessary files and configurations. To create a new Presence, follow these steps:

1. Open your terminal and run the following command:

```sh
pnpm exec pmd -c
```

2. Follow the on-screen instructions to create a new Presence project.
3. Start a development server to be able to build and test your Presence:

```sh
pnpm exec pmd -m
```

4. Open your browser and go to the PreMiD Extension settings page, then enable Developer Mode.
5. You should now see your new Presence in the list of Presences.

### Coding your Presence

Once you have created a new Presence project, you can start coding your Presence. The `pmd` CLI tool will generate a new Presence project with all the necessary files and configurations, so you can start coding your Presence right away.
