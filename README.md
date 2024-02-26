[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/PreMiD/PreMiD)

# PreMiD Monorepo

This is the monorepo for the PreMiD project. PreMiD is a simple, configurable utility that allows you to show what you're watching/listening to on your Discord profile.

## Table of Contents

- [Packages](#packages)
- [License](#license)

## Packages

This monorepo is split into multiple packages / projects. Here's a list of them:

- [apps/docs](apps/docs) - The official documentation for PreMiD.
- [apps/pd](apps/pd/README.md) - A simple url shortener service to shorten urls longer than 256 characters.
- [apps/schema-server](apps/schema-server) - Simple Schema server for the Presence manifest.

## Development

### Release

To release a new version of a package, run the following command:

```bash
pnpm bumpp -y -t <app>-v
```

Replace `<app>` with the name of the package you want to release. For example, to release a new version of the `schema-server` package, you would run:

```bash
pnpm bumpp -y -t schema-server-v
```

This will use bumpp to bump the version of the package in the `package.json` file, create a tag for the new version, and push the changes to the remote repository.

## License

This project is licensed under the [MPL-2.0 License](LICENSE).
