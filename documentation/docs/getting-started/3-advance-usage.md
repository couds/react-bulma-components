---
id: advanced-configuration
title: Advanced Configuration
sidebar_label: Advanced Configuration
sidebar_id: someSidebar
---

This configuration will allow you customize your build by selecting the components you want to use (only including the styles for the components you use), and also customize Bulma using [sass variables](https://bulma.io/documentation/customize/concepts/) 

:::caution

First you need to create a **_variables.sass** file in any **FOLDER** inside your project. (We will use this folder later)

:::

```sass {1}
/* Here update your variables */

@import '~bulma/sass/utilities/_all.sass'
```
---

## Frameworks

Here you can find instructions of how to configure React-Bulma on most Frameworks. The configuration may vary a little depending on your framework of choice. 

### Create React App

You need to enable SASS compilation on your Create React App (CRA) project. To enable SASS compilation

1. install node-sass.

```bash
npm i --save node-sass
```

2. Create/Update your **jsconfig.json** (or tsconfig if you are using typescript). 


```json
{
  "compilerOptions": {
    "baseUrl": "./[FOLDER]" // older where you put the _variables file
  }
}
```
---

### Next.js < 9

You need to enable SASS compilation on your Next.js project, See the instructions [here](https://github.com/zeit/next-plugins/tree/master/packages/next-sass).

You will also need to configure the transpiled modules plugin next-plugin-transpile-modules so install it.

```bash
npm i --save-dev next-plugin-transpile-modules
```

Now on your **next.config.js** configure your sass to include the directory where you put your _variables.sass file and add react-bulma-components to the transpiled modules.

```js
const withSass = require('@zeit/next-sass')
const withTM = require('next-plugin-transpile-modules');

module.exports = withTM(withSass({
    transpileModules: ['react-bulma-components'],
    sassLoaderOptions: {
        includePaths: ["./[FOLDER]"] // older where you put the _variables file
    },
}))
```
---

### Next.js >= 9

Next.js comes with sass transpiler enabled by default, but we need to edit some configurations. To do that, we need to install two modules `@zeit/next-sass` and `next-plugin-transpile-modules`.


```js
const withSass = require('@zeit/next-sass')
const withTM = require('next-plugin-transpile-modules');

module.exports = withTM(withSass({
    transpileModules: ['react-bulma-components'], // Tell next to transpile the react-bulma-components module
    // NOTE: this also allow to use absolute imports from this folder not only for the _variables.sass file
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.modules.push('./[FOLDER]'); // Add to webpack configuration the folder where you put the _variables file
        return config
    },
}))
```
---

### Gatsby

Follow the [instructions](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) to enable Sass compiling in project, and configure the sass plugin to include the path where you put the **_variables.sass** file. for example,

```json
{
  "plugins": [
      {
        "resolve": "gatsby-plugin-sass",
        "options": {
          "includePaths": ["./src"],
        },
      }
  ]
}
```
---
