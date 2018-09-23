# <div style="display: flex; align-items: center"><img src="https://raw.githubusercontent.com/couds/react-bulma-components/master/docs/images/logo.png" width="40" style="margin-top: 3px" /><span>React-bulma-components</span></div>


[![Build Status](https://travis-ci.org/couds/react-bulma-components.svg?branch=master)](https://travis-ci.org/couds/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)


React components for Bulma (v0.7.1) framework

This is an implementation of the [Bulma](http://bulma.io/) Framework Component in React by Jeremy Thomas.

You can find the Storybook stories of all components [here](https://couds.github.io/react-bulma-components/)

### BREAKING CHANGES:

- Dropped support for react < 16.2
- Navbar Menu its now a controlled component. there is a prop to show/hide the mobile menu

### To Install

```npm install react-bulma-components``` or ```yarn add -E react-bulma-components```

### To Use

Follow the instructions for creating a `_variables.sass` for your project, then:

```javascript
import React from 'react';
// You can import from the global component (you will need to include the css file dist/react-bulma-components.min.css)
import { Columns } from 'react-bulma-components';

// You can also include the js that also bundles the css (do not work with server-side rendering)
import { Columns } from 'react-bulma-components/full';

// [RECOMENDED] Or import only the components you will use (this will reduce the total bundle size)
// If you use this approach and want to use the global Bulma styles, import react-bulma-components/src/index.sass and configure webpack to handle sass files
import Columns from 'react-bulma-components/lib/components/columns';

export default () => (
  <Columns>
      <Columns.Column>
        First Column
      </Columns.Column>
      <Columns.Column>
        Second Column
      </Columns.Column>
      <Columns.Column>
        Third Column
      </Columns.Column>
      <Columns.Column>
        Fourth Column
      </Columns.Column>
    </Columns>
);
```

### Documentation

You can find the documentation in https://couds.github.io/react-bulma-components

Each component imports their own sass file. Thus, you can reduce your css total file size by only including the styles that you will use. To enable this, please configure your [Webpack](https://webpack.github.io/) to handle sass files. You can use the webpack.config.js on the root folder of this repository.

Some components may vary the api/naming convention with the Bulma Docs. Please refer to each stories in the Storybook to see how each component could be used (you can find the source code of the story by using the button "Show info" on the top-right corner of the page). 

The following components were ported:

- Box ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Box)) ([Docs](http://bulma.io/documentation/elements/box/))
- Breadcrumb ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Breadcrumb)) ([Docs](http://bulma.io/documentation/components/breadcrumb/))
- Button ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Button)) ([Docs](http://bulma.io/documentation/elements/button/))
- Card ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Card)) ([Docs](http://bulma.io/documentation/components/card/))
- Column ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Columns)) ([Docs](http://bulma.io/documentation/columns/basics/))
- Container ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Container)) ([Docs](http://bulma.io/documentation/layout/container/))
- Content ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Content)) ([Docs](http://bulma.io/documentation/elements/content/))
- Dropdown ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Dropdown)) ([Docs](http://bulma.io/documentation/components/dropdown/))
- Footer ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Footer)) ([Docs](http://bulma.io/documentation/layout/footer/))
- Form ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Form)) ([Docs](http://bulma.io/documentation/form/general/))
- Heading (Title, Subtitle and heading on Bulma) ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Heading)) ([Docs](http://bulma.io/documentation/elements/title/))
- Hero ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Hero)) ([Docs](http://bulma.io/documentation/layout/hero/))
- Icon ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Icon)) ([Docs](http://bulma.io/documentation/elements/icon/))
- Image ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Image)) ([Docs](http://bulma.io/documentation/elements/image/))
- Level ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Level)) ([Docs](http://bulma.io/documentation/layout/level/))
- Loader ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Loader))
- Media ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Media)) ([Docs](http://bulma.io/documentation/layout/media-object/))
- Message ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Message)) ([Docs](http://bulma.io/documentation/components/message/))
- Menu ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Menu)) ([Docs](http://bulma.io/documentation/components/menu/))
- Modal ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Modal)) ([Docs](http://bulma.io/documentation/components/modal/))
- Navbar ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Navbar)) ([Docs](https://bulma.io/documentation/components/navbar/))
- Notification ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Notification)) ([Docs](http://bulma.io/documentation/elements/notification/))
- Pagination ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Pagination)) ([Docs](https://bulma.io/documentation/components/pagination/))
- Panel ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Panel)) ([Docs](https://bulma.io/documentation/components/panel/))
- Progress ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Progress)) ([Docs](http://bulma.io/documentation/elements/progress/))
- Section ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Section)) ([Docs](http://bulma.io/documentation/layout/section/))
- Tabs ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tabs)) ([Docs](https://bulma.io/documentation/components/tabs/))
- Table ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Table)) ([Docs](http://bulma.io/documentation/elements/table/))
- Tag ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tag)) ([Docs](http://bulma.io/documentation/elements/tag/))
- Tile ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tile)) ([Docs](http://bulma.io/documentation/layout/tiles/))

### Override Bulma variables

To override the variables set by Bulma you will need to create a sass file like this one (_variable.sass):

```sass
@import '~bulma/sass/utilities/initial-variables.sass'

// ADD HERE variables you want to override
$primary: #f4f4f4

@import '~bulma/sass/utilities/_all.sass'
```

It may be necessary, depending on your project setup, to create this file, even if you do not intend on overriding default styles.

After that you will need to add an alias pointing to the file to your webpack configuration

```
resolve {
  // Other resolve props
  alias: {
    // Other aliases
    '_variables.sass': path.resolve(__dirname, 'relative/path/from/webpack/config/to/your/_variables.sass'),
  },
}

```

**For Gatsby.js v1** you can add a `modifyWebpackConfig` export to your `gatsby-node.js` file:

```
exports.modifyWebpackConfig = ({config, env}) => {
  config.merge({
    resolve: {
      alias: {
        '_variables.sass': path.resolve(__dirname, 'relative/path/from/webpack/config/to/your/_variables.sass')
      }
    }
  })
  return config
}
```

**For Gatsby.js v2** you can add a `onCreateWebpackConfig` export to your `gatsby-node.js` file:

```
const path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '_variables.sass': path.resolve(__dirname, 'relative/path/from/webpack/config/to/your/_variables.sass'),
      },
    },
  })
}
```

### Override Bulma variables in CRA _without_ eject

Sometimes, you don't want to eject your CRA (Create React App) application. But how to make custom style variables for Bulma? There is a simple and right way to solve it!

First of all, install package `node-sass-chokidar` ([docs](https://www.npmjs.com/package/node-sass-chokidar)):

```bash
$ npm install --save node-sass-chokidar
```

Or, if you use yarn:

```bash
$ yarn add -E node-sass-chokidar
```

For example, we're using dir structure, like this:

```bash
├── ...
├── public
│   └── ...
└── src
    ├── scss
    │   ├── _variables.scss     <-- Override Bulma variables here
    │   └── style.scss          <-- Entry styles (main)
    ├── ...
    └── style.css               <-- Output CSS file

```

Next, import `./src/style.css` into your main React app file (if not) `./src/index.js`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style.css'; // <-- This our output CSS file

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

> Don't forget to import `_variables.scss` into head of `style.scss`.

And now, just add to `scripts` section in your `./package.json` two commands:

```json
{
  "scripts": {
    // ...
    "build-css": "node-sass-chokidar --include-path ./src/scss --include-path ./node_modules src/scss/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src/scss --include-path ./node_modules src/scss/ -o src/ --watch --recursive"
  }
}
```

Open console (in your CRA dir), type `npm run watch-css` or `yarn run watch-css` and hit enter. Now, `node-sass-chokidar` will automatically update `./src/style.css`, when you make any changes in `./src/scss/style.scss` file for you!

This page is open source. Noticed a typo? Or something unclear? Improve this page on [GitHub](https://github.com/couds/react-bulma-components/blob/master/README.md)
