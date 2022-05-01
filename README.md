# Rimworld Mod Template
Welcome to Caaz's rimworld mod template. This is a simple repo anyone should be able to use to get started rimworld modding.

## Goals

As a rimworld modder, I'd like to be able to get up and running with as little boilerplate as possible. I don't enjoy XML as a markup language (or any thing that looks like that), so that's been replaced with pug. Additionally, I don't enjoy keeping track of versions, so there will be one source of truth.

## Features

- [x] Reasonable gitignore (Manually created, with love.)
- [x] Made for developing in VSCode (While possible to use with visual studio, it's more hurdles than it's worth)
- [x] Uses kraf's reference assemblies.
- [x] Includes (but doesn't require) hugslib.
- [ ] Github action for building the mod!
- [x] Uses NPM scripts for auto building locally.
- [x] A single location to modify mod metadata.
- [ ] A checklist for starting out

## Building

`npm run build` is the preferred way to build the project. Which will run `dotnet build` as well as build the pug packages.