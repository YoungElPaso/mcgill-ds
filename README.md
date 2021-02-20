<img src="./src/sass/assets/mcgill-logo-red-reverse-XL-header.svg" width="200">

# McGill Design System (mcgill-ds)

## This is an unofficial fork with more features and components.

A set of components and styles and other resources for the web that adhere to the digital standards of McGill University.

This package includes compiled CSS for direct use, the source files for development as well as other assets such as offical fonts and logos.

## Usage for developers:

- Add `'@wsg-public/mcgill-ds': 'xxx'` (where xxx is your desired version) to your projects package.json file.
- Run `npm install`.
- Use the code in ./src or ./dist in your own project, however you see fit.

## Basic usage of distributed code:

- To just use the distributed code:
- Use git to clone this repository, wherever you need it.
- Copy or link to the compiled CSS/JS or other resources found in ./dist/

## Contributing to mcgill-ds or using a development version:

- Clone this repository.
- Symlink the mcgill-ds package using [NPM link](https://docs.npmjs.com/cli/link).
- Create a new branch of mcgill-ds so you can make your changes.
- Push your changes and open a Merge Request to Master when you're ready.
- To use your development branch in a project, even before it's merged:
  - Push your code back to this repository.
  - Add the the mcgill-ds feature branch as an NPM dependency in the projects package.json file, E.g.

```
"@wsg-public/mcgill-ds": "git+https://git@gitlab.ncs.mcgill.ca/wsg-public/mcgill-ds.git#mds-1.1-dev"
```

## Scripts

The following commands can be run with the prefix: **`npm run`**

- **`storybook`** - run a Storybook development server (https://localhost:3001) to work on this package and view existing documentation.
- **`test`** - run jest/testing-library unit tests against Twig components - see results in the command line.
- **`build`** - build source and assets to distribute, outputs compiled CSS and JS to `./dist`
<!-- * test (run tests) -->

<!-- ## Docs (WIP) -->
<!-- The supporting documentation for this project can be found at: https://www.mcgill.ca/{???} -->

### Storybook

Storybook https://storybook.js.org can be run locally as well, allowing you to see all of the documented components in one place (useful if you want to work on them!), offering you the chance to see each one in isolation.

### List of Components

#### Button

<!-- ## Usage Guides (WIP)
  * ### Structure of the mcgill-ds Source Code
    * Sass - The Sass files in `/src/sass/` are broken down into the following structure:
      * Config - important base settings for setting variables used throughout the styles of this project (color palettes, some utility Sass functions etc)
      * Modules - Sass modules that provide mixins, variables and functions to be used by the Components to render the actual CSS
      * Components - Discrete components or building blocks used to style page headers, forms, blocks and other higher-level parts of the McGill Design System.
    * JS - The JavaScript files in `/src/js/` are at the moment all Svelte components, used in development (and in theory, production) to compose the User Interfaces that are a part of the McGill Design System. These components can be styled using the Sass Modules and Components found in `/src/sass`.
  * ### Using This Code With an Application Bundler (Parcel, Webpack, Rollup etc.)
    * Static HTML site (Parcel) [see `.examples/parcel-static-site/index.html` in this repository]
    * Svelte JS or other modern UI framework (React, Vue etc)
    * Drupal 7 themes
    - [ ] TODO This needs clarification, doesn't inform "using package with a bundler".
  * ### Including With Traditional HTML & CSS
    * Static HTML site
      * Including all of the styles distributed by this package in your site can be done easily by including one file: `/dist/css/all/mds.css`
      * This will make all of the typographic styles, components, colors, icons, background images etc and corresponding DOM classes available to be used with your markup.
      * To include only the styles you want, component by component, look instead to: `/dist/css/components/*.css` and include whichever components you want one at a time.
    * CDN
    * Drupal 7 themes
  * ### Creating a Custom CSS Build
    * Using and customizing the provided Sass modules and components in the source code for your own project -->
