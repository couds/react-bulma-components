---
id: level
title: Level
sidebar_label: Level
---


import Level from 'react-bulma-components/lib/components/level';
import { Field, Control, Input } from 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box'; 



The Level component is a simple horizontal container that can be used to structure all other elements.



---

## **Import**

```js
import Level from 'react-bulma-components/lib/components/level';
```

---

## **Structural Components**

The `Level` element consists of 3 components.

### `<Level />` 

 Main level container.

 #### **Modifiers**

Variable name          |    Type                                | Default  values  
-----------------------|----------------------------------------|------------------
`className`           | `is-${breakpoint}`: Add breakpoint. <br /> `is-mobile`: mobile level. | `undefined`     
`style`                | shape                                  | `undefined`     
`breakpoint`           | breakpoints                            | `undefined`    
`renderAs`             | renderAsShape                          | `div`         


### `<Level.Side />` 

Component to align contents to either left or right side.

#### **Modifiers**


Variable name           |    Type                                | Default  values  
------------------------|----------------------------------------|------------------
`align`                 | one of `left` or `right`               |  `left`         
`className`             | `level-${align}`: align.               | `undefined`     
`style`                 | shape                                  | `undefined`         
`renderAs`              | renderAsShape                          | `div`         



### `<Level.Item />` 

 Component for other elements.

 #### **Modifiers**


Variable name           |    Type                                   | Default  values   
------------------------|-------------------------------------------|------------------
`className`             | string                                    | `undefined`     
`style`                 | shape                                     | `undefined`        
`renderAs`              | renderAsShape                             | `div`         

---

## **Examples**

How to create a ```<Level />``` component.

1. Create your main container with the ```<Level />``` tag.

2. Align your contents to either side with the ```<Level.Side />``` tag.

    *   ```<Level.Side align="left" />``` to align contents to the left side.

    *   ```<Level.Side align="right" />``` to align contents to the right side.

3. Add contents to your level container with the ```<Level.Item />``` tag.


<Box>
  <Level renderAs="nav">
    <Level.Side align="left">
      <Level.Item>
        <Heading size={5} subtitle>
          <strong>123</strong> posts
        </Heading>
      </Level.Item>
      <Level.Item>
        <Field kind="addons">
          <Control>
            <Input placeholder="Find a post" />
          </Control>
          <Control>
          <Button renderAs="button">
            Search
          </Button>
          </Control>
        </Field>
      </Level.Item>
    </Level.Side>
    <Level.Side align="right">
      <Level.Item><strong>All</strong></Level.Item>
      <Level.Item><a>Published</a></Level.Item>
      <Level.Item><a>Drafts</a></Level.Item>
      <Level.Item><a>Deleted</a></Level.Item>
      <Level.Item><Button renderAs="a" color="success">New</Button></Level.Item>
    </Level.Side>
  </Level>
</Box>


```jsx
 <Level renderAs="nav">
  <Level.Side align="left">
    <Level.Item>
        <Heading size={5} subtitle>
        <strong>123</strong> posts
        </Heading>
    </Level.Item>
    <Level.Item>
      <Field kind="addons">
        <Control>
          <Input placeholder="Find a post" />
        </Control>
        <Control>
        <Button renderAs="button">
          Search
        </Button>
        </Control>
      </Field>
    </Level.Item>
  </Level.Side>
  <Level.Side align="right">
    <Level.Item><strong>All</strong></Level.Item>
    <Level.Item><a>Published</a></Level.Item>
    <Level.Item><a>Drafts</a></Level.Item>
    <Level.Item><a>Deleted</a></Level.Item>
    <Level.Item><Button renderAs="a" color="success">New</Button></Level.Item>
  </Level.Side>
 </Level>

```             

###  **Centered Level**

Nest all `<level.Item />` tags  directly under your `<level />` tag to create a Centered level.


<Box>
  <Level renderAs="nav">
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Tweets
        </Heading>
        <Heading renderAs="p">
          3,210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Following
        </Heading>
        <Heading renderAs="p">
          210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Followers
        </Heading>
        <Heading renderAs="p">
          321
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Likes
        </Heading>
        <Heading renderAs="p">
          321K
        </Heading>
      </div>
    </Level.Item>
 </Level>
</Box>


```jsx
  <Level renderAs="nav">
    <Level.Item>
      div>
        <Heading renderAs="p" heading>
        Tweets
        </Heading>
        <Heading renderAs="p">
        3,210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Following
        </Heading>
        <Heading renderAs="p">
          210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Followers
        </Heading>
        <Heading renderAs="p">
          321
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Likes
        </Heading>
        <Heading renderAs="p">
          321K
        </Heading>
      </div>
    </Level.Item>
 </Level>
```

### **With Breakpoint**

Add Breakpoints to your level component by using the `breakpoint` modifier.

<Box>
  <Level renderAs="nav" breakpoint='mobile'>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Tweets
        </Heading>
        <Heading renderAs="p">
        3,210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
    <div>
        <Heading renderAs="p" heading>
        Following
        </Heading>
        <Heading renderAs="p">
        210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Followers
        </Heading>
        <Heading renderAs="p">
        321
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Likes
        </Heading>
        <Heading renderAs="p">
        321K
        </Heading>
      </div>
    </Level.Item>
  </Level>
</Box>


``` jsx
  <Level renderAs="nav">
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Tweets
        </Heading>
        <Heading renderAs="p">
        3,210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
    <div>
        <Heading renderAs="p" heading>
        Following
        </Heading>
        <Heading renderAs="p">
        210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Followers
        </Heading>
        <Heading renderAs="p">
        321
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Likes
        </Heading>
        <Heading renderAs="p">
        321K
        </Heading>
      </div>
    </Level.Item>
  </Level>
```

---


## Official documentation

https://bulma.io/documentation/layout/level