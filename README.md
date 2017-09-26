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
- Breadcrumb ([Storybook](http://localhost:6006/?selectedKind=Breadcrumb)) ([Docs](http://bulma.io/documentation/components/breadcrumb/))
- Button ([Storybook](http://localhost:6006/?selectedKind=Button)) ([Docs](http://bulma.io/documentation/elements/button/))
- Card ([Storybook](http://localhost:6006/?selectedKind=Card)) ([Docs](http://bulma.io/documentation/components/card/))
- Column ([Storybook](http://localhost:6006/?selectedKind=Columns)) ([Docs](http://bulma.io/documentation/columns/basics/))
- Container ([Storybook](http://localhost:6006/?selectedKind=Container)) ([Docs](http://bulma.io/documentation/layout/container/))
- Content ([Storybook](http://localhost:6006/?selectedKind=Content)) ([Docs](http://bulma.io/documentation/elements/content/))
- Footer ([Storybook](http://localhost:6006/?selectedKind=Footer)) ([Docs](http://bulma.io/documentation/layout/footer/))
- Form ([Storybook](http://localhost:6006/?selectedKind=Form)) ([Docs](http://bulma.io/documentation/form/general/))
- Heading (Title, Subtitle and heading on Bulma) ([Storybook](http://localhost:6006/?selectedKind=Heading)) ([Docs](http://bulma.io/documentation/elements/title/))
- Hero ([Storybook](http://localhost:6006/?selectedKind=Hero)) ([Docs](http://bulma.io/documentation/layout/hero/))
- Image ([Storybook](http://localhost:6006/?selectedKind=Image)) ([Docs](http://bulma.io/documentation/elements/image/))
- Level ([Storybook](http://localhost:6006/?selectedKind=Level)) ([Docs](http://bulma.io/documentation/layout/level/))
- Media ([Storybook](http://localhost:6006/?selectedKind=Media)) ([Docs](http://bulma.io/documentation/layout/media-object/))
- Modal ([Storybook](http://localhost:6006/?selectedKind=Modal)) ([Docs](http://bulma.io/documentation/components/modal/))
- Notification ([Storybook](http://localhost:6006/?selectedKind=Notification)) ([Docs](http://bulma.io/documentation/elements/notification/))
- Progress ([Storybook](http://localhost:6006/?selectedKind=Progress)) ([Docs](http://bulma.io/documentation/elements/progress/))
- Section ([Storybook](http://localhost:6006/?selectedKind=Section)) ([Docs](http://bulma.io/documentation/layout/section/))
- Table ([Storybook](http://localhost:6006/?selectedKind=Table)) ([Docs](http://bulma.io/documentation/elements/table/))
- Tag ([Storybook](http://localhost:6006/?selectedKind=Tag)) ([Docs](http://bulma.io/documentation/elements/tag/))
- Tile ([Storybook](http://localhost:6006/?selectedKind=Tile)) ([Docs](http://bulma.io/documentation/layout/tiles/))

This page is open source. Noticed a typo? Or something unclear? Improve this page on [GitHub](https://github.com/couds/react-bulma-components/blob/master/README.md)