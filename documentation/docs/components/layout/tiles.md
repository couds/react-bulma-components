---
id: tiles
title: Tiles
sidebar_label: Tiles
---
import Tile from 'react-bulma-components/lib/components/tile';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';

The `Tile` component is used to build 2-dimensional grids.

---
## **Import**

```js
import Tile from 'react-bulma-components/lib/components/tile';
```
---

## **Modifiers**

Variable name    |    Type                                                | Default  values    
-----------------|--------------------------------------------------------|------------------
`classNames`     | `is-${kind}`: Tile kind. <br /> `is-${size}`: Tile size. <br/> `is-${color}`: Tile color <br /> '`is-vertical`: vertical,                                                 | `undefined`     
`style`          | shape                                                  | `undefined`       
`renderAs`       | renderAsShape                                          | `div` 
`kind`           | one of `ancestor`,`parent` or `child`                  | `undefined`
`vertical`       | boolean                                                | `undefined`
`size`           | one of `1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12` | `undefined`
`color`          | color                                                  | `undefined`
`notification`   | boolean                                                | `false`

---

## **Example**

Wrap your contents with the `<Tile />` tag to create 2d tiles.

 <div>
  <Section>
    <Box>
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile renderAs="article" kind="child" notification color="primary" >
                <Heading>Vertical...</Heading>
                <Heading subtitle>Top tile</Heading>
              </Tile>
              <Tile renderAs="article" kind="child" notification color="warning">
                <Heading>Tiles...</Heading>
                <Heading subtitle>Bottom Tile...</Heading>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image size="4by3" src="https://bulma.io/images/placeholders/640x480.png" />
              </Tile>
             </Tile>
           </Tile>
           <Tile kind="parent">
             <Tile renderAs="article" kind="child" notification color="danger">
               <Heading>Wide tile</Heading>
               <Heading subtitle>Aligned with the right tile</Heading>
               <div className="content" />
             </Tile>
           </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" notification color="success">
            <div className="content">
              <Heading>Tall tile</Heading>
              <Heading subtitle>With even more content</Heading>
              <div className="content" />
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Box>
  </Section>
</div>



```jsx
 <div>
  <Section>
    <Box>
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile renderAs="article" kind="child" notification color="primary" >
                <Heading>Vertical...</Heading>
                <Heading subtitle>Top tile</Heading>
              </Tile>
              <Tile renderAs="article" kind="child" notification color="warning">
                <Heading>Tiles...</Heading>
                <Heading subtitle>Bottom Tile...</Heading>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image size="4by3" src="https://bulma.io/images/placeholders/640x480.png" />
              </Tile>
             </Tile>
           </Tile>
           <Tile kind="parent">
             <Tile renderAs="article" kind="child" notification color="danger">
               <Heading>Wide tile</Heading>
               <Heading subtitle>Aligned with the right tile</Heading>
               <div className="content" />
             </Tile>
           </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" notification color="success">
            <div className="content">
              <Heading>Tall tile</Heading>
              <Heading subtitle>With even more content</Heading>
              <div className="content" />
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Box>
  </Section>
</div>
```
---


## Official documentation

https://bulma.io/documentation/layout/tiles
