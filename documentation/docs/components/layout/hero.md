---
id: hero
title: Hero
sidebar_label: Hero
---
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

Create large banners with the hero component. Banners created with the hero component are fullwidth and can also extend through the entire page height.
---

## **Import**

```js
import Hero from 'react-bulma-components/lib/components/hero';

```
---
## **Structural Components**

The `<Hero />` element consist of 4 components.

###  `<Hero />`

Main Hero container.

#### **Modifiers**

Variable name    |    Type                                          | Default  values    
-----------------|--------------------------------------------------|------------------
`className`     |       `is-${color}`: Change Hero color. <br />`is-${size}`: Modify size. <br />  `is-bold`: Change gradient. <br/> `is-fullheight-with-navbar`: Configure Navbar. <br/>          | `undefined`     
`style`          | shape                                            | `undefined`     
`breakpoint`     | breakpoints                                      | `undefined`    
`renderAs`       | renderAsShape                                    | `section`         
`color`          | colors                                           | `undefined`
`gradient`       | boolean                                          | `undefined`
`hasNavbar`      | boolean                                          | `undefined`
`size`           | one of `small`, `medium`, `large`, `fullheight`  | `undefinded`


### `<Hero.Head />`

Hero header component.

#### **Modifiers**

Variable name         |    Type                      | Default  values    
----------------------|------------------------------|-----------------------------
`className`          | string                       | `undefined`     
`style`               | shape                        | `undefined`         
`renderAs`            | renderAsShape                | `div` 

### `<Hero.Body />`

Hero body component.

#### **Modifiers**

Variable name         |    Type                          | Default  values    
----------------------|----------------------------------|------------------
`className`          | string                           | `undefined`     
`style`               | shape                            | `undefined`       
`renderAs`            | renderAsShape                    | `div` 

### `<Hero.Footer>`

Hero footer component.

#### **Modifiers**

Variable name                    |    Type             | Default  values    
---------------------------------|---------------------|------------------
`className`                     | string              | `undefined`     
`style`                          | shape               | `undefined`        
`renderAs`                       | renderAsShape       | `div` 

___

## **Examples**

How to create a ```<Hero />``` container.

1. Create your main container with the ```<Hero />``` tag.

2. Add header contents into the ```<Hero.Head />``` tag.

3. Add body contents into the ```<Hero.Body />``` tag.

3. Add footer contents into the ```<Hero.Footer />``` tag.

<div>
  <Section>
    <Hero color="primary" >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Primary
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="danger" >
      <Hero.Body>
        <Container>
          <Heading>
           Hero title Danger
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="info" >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Info
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
</div>




```jsx
<div>
  <Section>
    Hero color="primary" >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Primary
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="danger" >
      <Hero.Body>
        <Container>
          <Heading>
           Hero title Danger
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="info" >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Info
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
</div>

```

### **With gradient**

Add gradient to your Hero banner using the `gradient` modifier.

<div>
  <Section>
    <Hero color="primary" gradient >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Primary
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="danger" gradient >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Danger
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="info" gradient >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Info
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
</div>



```jsx
<div>
  <Section>
    <Hero color="primary" gradient >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Primary
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="danger" gradient >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Danger
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
  <Section>
    <Hero color="info" gradient >
      <Hero.Body>
        <Container>
          <Heading>
          Hero title Info
          </Heading>
          <Heading subtitle size={3}>
          Subtitle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
</div>
```



### **Different sizes**

Change the size and vertical alignment of your banner using the ```size``` modifier. You can configure your banner to a large, medium, small or fullheight banner.

<div>
  <Section>
    <Hero color="primary" size="medium" >
      <Hero.Body>
      Medium
      </Hero.Body>
    </Hero>
    <Hero color="info" size="large" >
      <Hero.Body>
      Large
      </Hero.Body>
    </Hero>
    <Hero color="danger" size="fullheight" >
      <Hero.Body>
      FULL HEIGHT
      </Hero.Body>
    </Hero>
  </Section>
</div>



```jsx
<div>
  <Section>
    <Hero color="primary" size="medium" >
      <Hero.Body>
      Medium
      </Hero.Body>
    </Hero>
    <Hero color="info" size="large" >
      <Hero.Body>
      Large
      </Hero.Body>
    </Hero>
    <Hero color="danger" size="fullheight" >
      <Hero.Body>
      FULL HEIGHT
      </Hero.Body>
    </Hero>
  </Section>
</div>
```
  

### **Vertical alignment**

<div>
  <Section>
   <Hero size="fullheight" color="primary" >
     <Hero.Head renderAs="header">
      <div className="is-info">Header</div>
     </Hero.Head>
     <Hero.Body>
      Body
     </Hero.Body>
     <Hero.Footer>
      <div className="is-danger">Footer</div>
     </Hero.Footer>
   </Hero>
 </Section>
</div>



```jsx
<div>
  <Section>
   <Hero size="fullheight" color="primary" >
     <Hero.Head renderAs="header">
      <div className="is-info">Header</div>
     </Hero.Head>
     <Hero.Body>
      Body
     </Hero.Body>
     <Hero.Footer>
      <div className="is-danger">Footer</div>
     </Hero.Footer>
   </Hero>
 </Section>
</div>
```


----
  
## Official documentation

https://bulma.io/documentation/layout/hero