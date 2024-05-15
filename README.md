# TikiDiscordBot 

![Github Action CI Badge](https://github.com/tjeufoolen/TikiDiscordBot/actions/workflows/ci.yml/badge.svg) ![Github Action Docker image publish badge](https://github.com/tjeufoolen/TikiDiscordBot/actions/workflows/docker.yml/badge.svg)

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

This project can run inside Docker. Use the following commands to build an image and run the image inside a docker container:

- `docker build --tag tiki-discord-bot .`
- `docker run tiki-discord-bot`

## Release candidate(s)

Every now and then a collection of commits have been merged to main and it is time to create a new release candidate. Whenever this candidate is created an automated github action kicksoff which builds the docker image and publishes it to the [dockerhub repository](https://hub.docker.com/r/tjeufoolen/tiki-discord-bot).

## Authors

- [Tjeu Foolen](https://github.com/tjeufoolen)

## References

- [Documentation discord.js](https://discord.js.org/docs/packages/discord.js/14.15.2)
- [Guide discord.js](https://discordjs.guide/#before-you-begin)
