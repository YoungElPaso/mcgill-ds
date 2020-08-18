<img src="./src/sass/assets/mcgill-logo-red-reverse-XL-header.svg" width="200">

# Contributing to McGill-ds
 * Clone mcgill-ds project somewhere other than node_modules in /moriarty for example themes/.
 * Symlink the scoped mcgill-ds package to be used in Moriarty using [NPM link](https://docs.npmjs.com/cli/link).

### I've found the following method reliable when cloning mcgill-ds in a theme. i.e., moriarty/mcgill-ds
```
git clone git@gitlab.ncs.mcgill.ca:wsg-public/mcgill-ds.git && cd mcgill-ds # Clone repo
rm -rf node_modules package-lock.json # prepare to run npm install if run into errors.
npm install # install npm packages in mcgill-ds
cd ~/theme/theme-name  # go into the dir of your main project
npm install
npm link mcgill-ds     # link the dir of your dependency: Tip link package as the last step.
```
or you can try...

 1. Run: `npm link` in the mcgill-ds project
 2. Run: `$ npm link @wsg-public/mcgill-ds` in project that uses mcgill-ds.
 3. Run: `$ npm install` to install dependencies.

 Note: If you have errors running npm commands within mcgill-ds
 `rm -rf node_modules package-lock.json` and run `$ npm install` consider clearing npm cache if needed.

# McGill Design System (mcgill-ds)

A set of components and styles and other resources for the web that adhere to the digital standards of McGill University.


This package includes compiled CSS for direct use, the source Sass files for development as well as other assets i.e., offical fonts and logos.

 <!-- 1. Clone, then run: `npm install`.
 1. To develop this package with Storybook and to see the documentation: `npm run dev`.
 1. To build the source and assets for distribution: `npm run build`.
 1. To launch a demo that uses Parcel bundler: `npm run demo`. Go to `http://localhost:1234` -->


 ## Scripts
 The following commands can be run with the prefix: `npm run `
 * **`dev`** - run a Storybook development server (https://localhost:3001) to work on this package and simultaneously run the included MDS project site (http://localhost:1234)
 * **`build`** - build source and assets to distribute, outputs compiled CSS and JS to `./dist`
 <!-- * test (run tests) -->
 * **`demo`** - launch a demo that uses Parcel bundler to dogfood and bundle this code.
 <!-- * deploy (build source and distribute to a remote server for hosting) -->

## Docs (WIP)
The supporting documentation for this project can be found at: https://www.mcgill.ca/{???}
### Storybook
Storybook [link] can be run locally as well, allowing you to see all of the documented components in one place (useful if you want to work on them!), offering you the chance to see each one in isolation.
### Project site
The project site can also be run locally, and is another place to see the code created here in action.

 ## Usage Guides (WIP)
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
    * Using and customizing the provided Sass modules and components in the source code for your own project
