---
id: hero
title: Hero
sidebar_label: Hero
---
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';

Create large banners with the hero component. Banners created with the hero component are fullwidth and can also extend through the entire page height.



---

### **Import**


```shell
import Hero from 'react-bulma-components/lib/components/hero';
```

---

To create hero banners

  1.  Create the hero container with the ```<Hero />``` tag.

  2.  Add contents into the container using the ```<Hero.Body />``` tag.

---


### **Examples**

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
```
  

### **Vertical alignment**


<div>
 <Section>
  <Hero size="fullheight" color="primary" >
    <Hero.Head renderAs="header">
        <div className="bd-notification is-info">Header</div>
    </Hero.Head>
    <Hero.Body>
        Body
    </Hero.Body>
    <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
    </Hero.Footer>
  </Hero>
  </Section>
</div>



```jsx
  <Hero size="fullheight" color="primary" >
    <Hero.Head renderAs="header">
        <div className="bd-notification is-info">Header</div>
    </Hero.Head>
    <Hero.Body>
        Body
    </Hero.Body>
    <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
    </Hero.Footer>
  </Hero>
```


----
  
## Official documentation

https://bulma.io/documentation/layout/hero