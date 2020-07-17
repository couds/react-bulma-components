---
id: box
title: Box
sidebar_label: Box
description: Create a react-bulma box
hide_table_of_contents: false
---

import Tag from 'react-bulma-components/lib/components/tag'; 
import Box from 'react-bulma-components/lib/components/box'; 
import Media from 'react-bulma-components/lib/components/media'; 
import Image from 'react-bulma-components/lib/components/image'; 
import Content from 'react-bulma-components/lib/components/content'; 
import Section from 'react-bulma-components/lib/components/section'; 
 

The Box element is a white container that can be used to display other elements and media files. 

---

## **Import**

``` js
import Box from 'react-bulma-components/lib/components/box';
```

---

---

## **Example**


<Box>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/1280x960.png" />
    </Media.Item>
    <Media.Item>
       <Content>
         <p>
           <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
           <br />
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
         </p>
       </Content>
    </Media.Item>
  </Media>
</Box>

``` jsx
<Box>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/1280x960.png" />
    </Media.Item>
    <Media.Item>
       <Content>
         <p>
           <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
           <br />
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
         </p>
       </Content>
    </Media.Item>
  </Media>
</Box>
```

<Box      
  responsive={{
    mobile: {
      display: {
        value: 'block',
      },
    },
    tablet: {
      display: {
        value: 'flex',
      },
    },
    desktop: {
      display: {
        value: 'inline-flex',
        only: true,
      },
    },
    widescreen: {
      display: {
        value: 'inline-block',
      },
    },
  }}
  hide={{
    tablet: {
      hide: true,
      only: true,
    },
    widescreen: {
      hide: true,
    },
  }}
>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image size={64} alt="64x64" src='https://bulma.io/images/placeholders/640x480.png' />
    </Media.Item>
    <Media.Item>
      <Content>
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </Content>
    </Media.Item>
  </Media>
</Box>

```jsx
<Box      
  responsive={{
    mobile: {
      display: {
        value: 'block',
      },
    },
    tablet: {
      display: {
        value: 'flex',
      },
    },
    desktop: {
      display: {
        value: 'inline-flex',
        only: true,
      },
    },
    widescreen: {
      display: {
        value: 'inline-block',
      },
    },
  }}
  hide={{
    tablet: {
      hide: true,
      only: true,
    },
    widescreen: {
      hide: true,
    },
  }}
>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image size={64} alt="64x64" src='https://bulma.io/images/placeholders/640x480.png' />
    </Media.Item>
    <Media.Item>
      <Content>
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </Content>
    </Media.Item>
  </Media>
</Box>
```

---

## Official documentation

https://bulma.io/documentation/elements/box
