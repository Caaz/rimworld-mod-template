# Rimworld Mod Template
Welcome to Caaz's rimworld mod template. This is a simple repo anyone should be able to use to get started rimworld modding.

## Goals

As a rimworld modder, I'd like to be able to get up and running with as little boilerplate as possible. I don't enjoy XML as a markup language (or any thing that looks like that), so that's been replaced with pug. Additionally, I don't enjoy keeping track of versions, so there will be one source of truth.

## Features

- Reasonable gitignore
- Made for VSCode
- Uses `Krafs.Rimworld.Ref` for Rimworld's Reference Assemblies
- Includes (but doesn't require) Hugslib and Harmony.
- Has a Github action for building the mod on the main branch.
- Has a `metadata.json` for including variables that get used in pug, gitlab actions, and the csproj file.
- Has a bit of a [Getting Started](#getting-started) section!

## Getting Started

So, you want to mod like Caaz?

1. [Use this template](https://github.com/Caaz/rimworld-mod-template/generate)
    - This will create a repository on your account, using the same files and folder structure I do.
1. Clone the resulting repo...
1. Edit your `metadata.json`! That holds all the relevant information for your mod, in one spot! This includes the name of the project, the version, author data. Things you might expect in `About.xml`, but since they're variables, you can use them in other areas of the pug templates. See [the metadata section](#Metadata) for more details.

## Metadata

### Environments
`metadata.json` Allows you to define environment variables depending on how you build. This allows you to built the project in development mode, with some variables tweaked.

### Reasoning

One of my personal pain points in modding has been wanting a single place to hold information for the mod. For example, if you wanted to put features behind some defs behind feature flags, you could do something like...
```pug
if featureFlag
  ThingDef
    label top_secret_def
```

These variables are usable in the pug templates, simply by using them as you would any other variable. In the `About.pug` for example, we reference the name with:
```pug
doctype xml
ModMetaData
  name=name
```
This allows us to set the name once and reference it in other places as well. You're free to fill `metadata.json` with whatever variables you may find handy, and use them across all of your pug files.

### Variables used by default
These variables are currently being used by the mod template's pug files.

- `name`
  - The name of the mod, used in `About.pug`. eg. ``My Cool Mod`
  - The build github action always uses the name found in `default`, so be aware of that.
- `author`
  - A comma seperated list of authors that have worked on the mod. Used in `About.pug`. eg. `Me, Myself, and I`
- `description`
  - A description used in `About.pug`. eg. `A pretty neat mod template.`
- `version`
  - The version of the assembly. Used in `csproj.pug`. eg. `1.0.0.1`
- `packageId`
  - The package ID of the mod. Used in `About.pug` eg. `my.mod.template`
- `namespace`
  - The namespace your C# code will use. Used in `csproj.pug`, and [should be used in your code](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/namespaces). eg. `MyMod`
- `assemblyName`
  - The assembly output name. It's the filename of the `.dll` the C# builds to. And here, it's also used for the filename of the `.csproj`. eg. `MyMod`

## Building the Mod

`npm run build` will build the pug, and then build the DLL file. It's that simple!