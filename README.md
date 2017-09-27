# react-bulma-components

[![Build Status](https://travis-ci.org/couds/react-bulma-components.svg?branch=master)](https://travis-ci.org/couds/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dt/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)


React components for Bulma framework

This is a implementation in React of the [Bulma](http://bulma.io/) Framework Component by Jeremy Thomas.

You can find the Storybook of all components [here](https://couds.github.io/react-bulma-components/)

### To Install

```npm install react-bulma-components``` or ```yarn add -E react-bulma-components```

### To Use

```javascript
import React from 'react';
// You can import from the global component (you will need to include the css file dist/react-bulma-components.min.css)
import { Columns } from 'react-bulma-components';

// You can also include the js that also bundle the ccs (do not work with server-side rendering)
import { Columns } from 'react-bulma-components/full';

// [RECOMENDED] Or import only the components you will use (this will reduce the total bundle size)
// If you use this approach and want to use the global Bulma styles import react-bulma-components/src/index.sass and configure webpack to handle sass files
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

Each component import his own sass file, in this way you can reduce your css total file only including the styles you use, to enable this please configure your [Webpack](https://webpack.github.io/) to handle sass files. You can use the webpack.config.js on the root folder of this repository

Some componets may vary the api/naming convention with the Bulma Docs, please refear to each storybook to see how to use each component (you can find the source code of the story usin ght button "Show info" on the top-right corner) 

The Following componets were ported:

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
- Image ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Image)) ([Docs](http://bulma.io/documentation/elements/image/))
- Icon ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Icon)) ([Docs](http://bulma.io/documentation/elements/icon/))
- Level ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Level)) ([Docs](http://bulma.io/documentation/layout/level/))
- Media ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Media)) ([Docs](http://bulma.io/documentation/layout/media-object/))
- Modal ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Modal)) ([Docs](http://bulma.io/documentation/components/modal/))
- Notification ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Notification)) ([Docs](http://bulma.io/documentation/elements/notification/))
- Progress ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Progress)) ([Docs](http://bulma.io/documentation/elements/progress/))
- Section ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Section)) ([Docs](http://bulma.io/documentation/layout/section/))
- Table ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Table)) ([Docs](http://bulma.io/documentation/elements/table/))
- Tag ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tag)) ([Docs](http://bulma.io/documentation/elements/tag/))
- Tile ([Storybook](https://couds.github.io/react-bulma-components/?selectedKind=Tile)) ([Docs](http://bulma.io/documentation/layout/tiles/))

This page is open source. Noticed a typo? Or something unclear? Improve this page on [GitHub](https://github.com/couds/react-bulma-components/blob/master/README.md)