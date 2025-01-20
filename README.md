# wuh-on-rails

Code generation tools for WUH apps

## WUH

WUH stands for Web Components, Unison, and Htmx.

For quick intro talk, see [The WUH stack](https://www.youtube.com/watch?v=5l5MJIZLQ2M)

## Code generation

This project exists as a tool to bootstrap and then rapidly generate common code in WUH apps, in an opinionated way. Heavily inspired by Rails and Django.

The current plan is to use a combo of [transcripts](https://www.unison-lang.org/docs/tooling/transcripts/) and Plop. But it would be nice to build our own CLI to abstract over these

## Usage

- Clone/Fork this repository
- Then, use `npm run plop` to get started
- You can use `scaffold-app` to load a file with all the bootstrapping code, then add it to your UCM project
- You will probably want to run `shoelace-ui` immediately after. I'm considering just moving it into `scaffold-app`
- Similarly, you can use `scaffold-service` to spin up the boilerplate for a new model (the model, service, and routes). You just need to wire it up in your `main`!

## Todos

- Add auth generator
- Start building something with this and make updates
- Really flesh out the forms with good examples
- Should the default model have some example fields?
- Should we remove the new typing for now? feels like it hurts more than it helps
