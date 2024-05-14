# TikiDiscordBot ![Github Action CI Badge](https://github.com/tjeufoolen/TikiDiscordBot/actions/workflows/ci.yml/badge.svg)

A Simple discord bot written for the tikinetwork community

## Requirements

- [Node v20.x or higher](https://nodejs.org)
- [pnpm](https://pnpm.io/)
- [Discord bot token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)

## Getting started

1. Clone this project
2. Run `pnpm install`
3. Copy `.env.example` to `.env` and fill in your credentials
4. Run `pnpm start`

## Docker

This bot can run inside Docker. Use the following commands to build an image and run the image inside a docker container:

- `podman build --tag tiki-discord-bot .`
- `podman run tiki-discord-bot`

## Authors

- [Tjeu Foolen](https://github.com/tjeufoolen)

## References

- [Documentation discord.js](https://discord.js.org/docs/packages/discord.js/14.15.2)
- [Guide discord.js](https://discordjs.guide/#before-you-begin)
