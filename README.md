# <div style="display: flex; align-items: center"><img src="https://raw.githubusercontent.com/couds/react-bulma-components/master/docs/images/logo.png" width="40" style="margin-top: 3px" /><span>React-bulma-components</span></div>


[![Build Status](https://travis-ci.org/couds/react-bulma-components.svg?branch=master)](https://travis-ci.org/couds/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)

React components for [Bulma](http://bulma.io/) (v0.8.2) UI compatible with most used React Frameworks ([Gatsby](https://www.gatsbyjs.org/), [CRA](https://github.com/facebook/create-react-app), [Next.js](https://nextjs.org/))

### V4 Pool

Please Check https://github.com/couds/react-bulma-components/issues/258, we are thinking to change the bulma dependency to a peedr dependency and remove the style importes from this library. you can vote here https://doodle.com/poll/mqqpxwkzm6nnrs3s

### BREAKING CHANGES V2 -> V3:

- Now the alias needed to override Bulma variables (and/or use the directly the sass files) is `_variables.sass` instead of `~_variables.sass`, See Advanced setup below.
- V3 Use the new Context api so requires `react >= 16.3`

### To Install

```npm install react-bulma-components``` or ```yarn add -E react-bulma-components```

### To Use

Currently there are two ways to use this library depending of your needs and configuration:

- **Basic**: You import from the main module the components and include the css yourself (No treeshaking by default, no bulma variables override)
- **Advanced**: You import from the lib folder the components you need, this is the more versatile way but need some extra configuration (See [Advanced Setup](https://github.com/couds/react-bulma-components#advanced) section)

#### Basic

This configuration will allow you to start fast but with one drawback, by default will include all components (no treeshaking) and will use the default variables of Bulma.

```javascript
import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

export default () => (
  <Button color="primary">My Bulma button</Button>
)
```

Form elements are imported as part of the Form class. 

```javascript
import { Form } from 'react-bulma-components';

const { Input, Field, Control, Label } = Form;
```

#### Advanced

This configuration is recomended if you answer yes to one of the following questions:

- I'm worried about the final size of my bundle?
- I need to override the default Bulma variables?



In your main scss/sass file you will need to include the generic css classes bulma use, please ensure you do this on your main scss file (App.scss fox example) and do not add this inside the `_variables` file (see below)

```scss
@import "~react-bulma-components/src/index.sass"

// Other styles
```

You can start using the library like this

```javascript
import React from 'react';
import Button from 'react-bulma-components/lib/components/button';

export default () => (
  <Button color="primary">My Bulma button</Button>
)
```

Before you use this configuration you need to setup a `_variables.sass` file somewhere in your project (I recommend inside your `src` folder). This file will allow you to override bulma variables if need it like:

```
$primary: #c3c3c3
```

**Note** Use this file only for variables, do not include any css rule in it because that rule will be duplicated every time you include a component from this library.

Depending of your project configuration you will need to setup your framework to use this file:

#### Raw Webpack

Configure your webpack to handle sass files.

Inside the resolve directive setup your webpack to use modules from the folder where you put the `_variables.sass` file

```javascript
{
  // ...
  resolve: {
    modules: ['node_modules', 'src'],
    // ...
  }
}
```

#### CRA

Install node-sass to enable the sass compiles on your project.

After that update your `jsconfig.json` to add the folder to your path
```
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

where `./src` is the folder where you put your `_variables.sass`

#### Gatsby

Follow the [instructions](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) to enable Sass compiling in project, and configure the sass plugin to include the path where you put the `_variables.sass` file, for example:

```javascript
plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src"],
      },
    }
    ...
]

```

#### Next.js

Follow the [instructions](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) to enable sass in the project. You will also need to configure the transpiled modules plugin `next-transpile-modules` so install it `npm i --save-dev next-transpile-modules`.

Now on your `next.config.js` configure your sass to include the directory where you put your `_variables.sass` file and add `react-bulma-components` to the transpiled modules. **note** `withTM()` should always be the *most nested* function in your config.

```javascript
const withSass = require('@zeit/next-sass')
const withTM = require('next-transpile-modules')(['react-bulma-components']);

module.exports = withTM(withSass({
    // NOTE: this also allow to use abolute import from this folder not only for the _variables.sass file
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.modules.push('./pages'); // Add to webpack configuration the folder where you put the _variables file
        return config
    },
}));
```

The last thing to remember is that since you're transpiling `react-bulma-components` from source, make sure your import statements reflect this in your app:


```javascript
import React from 'react';
import Button from 'react-bulma-components/src/components/button'; //import from src, not lib

export default () => (
  <Button color="primary">My Bulma button</Button>
)
```

### Documentation

You can find the documentation in https://couds.github.io/react-bulma-components

Each component imports their own sass file. Thus, you can reduce your css total file size by only including the styles that you will use. To enable this, please configure your [Webpack](https://webpack.github.io/) to handle sass files. You can use the webpack.config.js on the root folder of this repository.

Some components may vary the api/naming convention with the Bulma Docs. Please refer to each stories in the Storybook to see how each component could be used (you can find the source code of the story on the tab `Story` on the bottom panel

The following components were ported:

|Component|Storybook|Bulma docs|
|---|---|---|
|Box|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Box)|[Docs](http://bulma.io/documentation/elements/box/)|
|Breadcrumb|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Breadcrumb)|[Docs](http://bulma.io/documentation/components/breadcrumb/)|
|Button|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Button)|[Docs](http://bulma.io/documentation/elements/button/)|
|Card|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Card)|[Docs](http://bulma.io/documentation/components/card/)|
|Column|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Columns)|[Docs](http://bulma.io/documentation/columns/basics/)|
|Container |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Container)|[Docs](http://bulma.io/documentation/layout/container/)|
|Content |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Content)|[Docs](http://bulma.io/documentation/elements/content/)|
|Dropdown |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Dropdown)|[Docs](http://bulma.io/documentation/components/dropdown/)|
|Footer |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Footer)|[Docs](http://bulma.io/documentation/layout/footer/)|
|Form |[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Form)|[Docs](http://bulma.io/documentation/form/general/)|
|Heading |Title, Subtitle and heading on Bulma [Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Heading)|[Docs](http://bulma.io/documentation/elements/title/)|
|Hero|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Hero)|[Docs](http://bulma.io/documentation/layout/hero/)|
|Icon|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Icon)|[Docs](http://bulma.io/documentation/elements/icon/)|
|Image|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Image)|[Docs](http://bulma.io/documentation/elements/image/)|
|Level|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Level)|[Docs](http://bulma.io/documentation/layout/level/)|
|List|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=List)|[Docs](https://bulma.io/documentation/components/list/)|
|Loader|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Loader)| -- |
|Media|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Media)|[Docs](http://bulma.io/documentation/layout/media-object/)|
|Message|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Message)|[Docs](http://bulma.io/documentation/components/message/)|
|Menu|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Menu)|[Docs](http://bulma.io/documentation/components/menu/)|
|Modal|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Modal)|[Docs](http://bulma.io/documentation/components/modal/)|
|Navbar|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Navbar)|[Docs](https://bulma.io/documentation/components/navbar/)|
|Notification|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Notification)|[Docs](http://bulma.io/documentation/elements/notification/)|
|Pagination|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Pagination)|[Docs](https://bulma.io/documentation/components/pagination/)|
|Panel|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Panel)|[Docs](https://bulma.io/documentation/components/panel/)
|Progress|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Progress)|[Docs](http://bulma.io/documentation/elements/progress/)
|Section|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Section)|[Docs](http://bulma.io/documentation/layout/section/)
|Tabs|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tabs)|[Docs](https://bulma.io/documentation/components/tabs/)
|Table|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Table)|[Docs](http://bulma.io/documentation/elements/table/)
|Tag|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tag)|[Docs](http://bulma.io/documentation/elements/tag/)
|Tile|[Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tile)|[Docs](http://bulma.io/documentation/layout/tiles/)

#### Adding ref to a component
We use a custom prop to pass down the ref to the next dom object. (instead to the instance of the component).

```javascript
const TestComponent = () => {
  const buttonRef = useRef(null);
  return <Button domRef={buttonRef}>button</Button>
}
```

Why we do this instead of using [React.forwardRef](https://reactjs.org/docs/forwarding-refs.html)? The forwardRef wrap the component into another one, because this is a library for wrapping the Bulma Framework cause an overhead and a lot of noise on the component tab of the React Dev Tools.
