# <div style="display: flex; align-items: center"><img src="https://raw.githubusercontent.com/couds/react-bulma-components/next/documentation/static/img/logo.png" width="40" style="margin-top: 3px" /><span>React Bulma Components</span></div>


[![Build Status](https://travis-ci.org/couds/react-bulma-components.svg?branch=master)](https://travis-ci.org/couds/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)

React components for [Bulma](http://bulma.io/) (v0.9.1) UI compatible with most used React Frameworks ([Gatsby](https://www.gatsbyjs.org/), [CRA](https://github.com/facebook/create-react-app), [Next.js](https://nextjs.org/))

## BREAKING CHANGES V3 -> V4:

- We Remove all the styles from this library, now you need to install and use the [bulma.io](https://bulma.io) package directly
- Removed included icons
- Dropdown component now accept an `icon` prop that will accept the the component to render the icon
- Removed the `icon` prop from the `Icon` component.


## To Install

```npm install react-bulma-components``` or ```yarn add -E react-bulma-components```

## To Use

```javascript
import React from 'react';
import 'bulma/css/bulma.min.css';
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

## FAQ

### Use Button to render a Link from React-Router
We allow custom render component on all our components, to do it you can use the `renderAs` props like this

```javascript
import React from 'react';
import { Button } from 'react-bulma-components';
import { Link } from 'react-router';

const CustomLink = ({ to }) => {
  return (
    <Button to={to} renderAs={Link}>
      My react router link
    </Button>
  )
}

```


### Adding ref to a component
We use a custom prop to pass down the ref to the next dom object. (instead to the instance of the component).

```javascript
const TestComponent = () => {
  const buttonRef = useRef(null);
  return <Button domRef={buttonRef}>button</Button>
}
```

**Why we do this instead of using** [React.forwardRef](https://reactjs.org/docs/forwarding-refs.html)? The forwardRef wrap the component into another one, because this is a library for wrapping the Bulma Framework cause an overhead and a lot of noise on the component tab of the React Dev Tools.


## Documentation

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
