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
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';
const style = { background: '#e6e6e6', width: 64, height: 64 };




The level component is a simple horizontal container that can be used to structure all other elements.

---

### **Import**

```shell
import Level from 'react-bulma-components/lib/components/level';
```

---


---

Structuring a ```<level />``` component

1. Create your main container with the ```<level />``` tag.

2. Align your contents to either side with the ```<level.Side />``` tag

    *   ```<level.Side align="left" />``` to align contents to the left side.
    *   ```<Level.Side align="right" />``` to align contents to the right side.

3. Add contents to your level container with the ```<level.Item />``` tag.

---


---

## **Examples**

<Section>
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
</Section>

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

<Section>
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
</Section>



```jsx
    <Level renderAs="nav">
      <Level.Item style={style}>
        <div>
          <Heading renderAs="p" heading>
          Tweets
          </Heading>
          <Heading renderAs="p">
          3,210
          </Heading>
        </div>
      </Level.Item>
      <Level.Item style={style}>
        <div>
           <Heading renderAs="p" heading>
           Following
           </Heading>
           <Heading renderAs="p">
           210
           </Heading>
        </div>
      </Level.Item>
      <Level.Item style={style}>
        <div>
            <Heading renderAs="p" heading>
            Followers
            </Heading>
            <Heading renderAs="p">
            321
            </Heading>
        </div>
      </Level.Item>
      <Level.Item style={style}>
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


### **With breakpoint**

Add Breakpoints to your level component by using the `breakpoint` modifier

<Section>
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
</Section>



``` jsx
          <Level renderAs="nav" breakpoint={breakpoint}>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                Tweets
                </Heading>
                <Heading renderAs="p">
                3,210
                </Heading>
              </div>
            </Level.Item>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                Following
                </Heading>
                <Heading renderAs="p">
                210
                </Heading>
              </div>
            </Level.Item>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                Followers
                </Heading>
                <Heading renderAs="p">
                321
                </Heading>
              </div>
            </Level.Item>
            <Level.Item style={style}>
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