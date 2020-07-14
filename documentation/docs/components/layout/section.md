---
id: section
title: Section
sidebar_label: Section
---
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Notification from 'react-bulma-components/lib/components/notification';

The `Section` component is used divide your layout into different sections. This allows for better formatting of your pages.

---

## **Import**

```js
import Section from 'react-bulma-components/lib/components/section';
```

---
## **Modifiers**

Variable name    |    Type                                    | Default  values    
-----------------|--------------------------------------------|------------------
`classNames`     | `is-${size}`: Section size                 | `undefined`     
`style`          | shape                                      | `undefined`         
`renderAs`       | renderAsShape                              | `section` 
`size`           | one of `medium` or`large`                  | `undefined`

---

## **Examples**

 Wrap your elements with the ```<Section />``` tag to format them into different sections.
 
<div>
  <Section>
    <Notification color="info">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
  <Section>
    <Notification color="primary">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
  <Section>
    <Notification color="danger">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
  <Section>
    <Notification color="warning">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
</div>

```jsx
<div>
  <Section>
    <Notification color="info">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
  <Section>
    <Notification color="primary">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
  <Section>
    <Notification color="danger">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
  <Section>
    <Notification color="warning">
    <Heading>Section</Heading>
    <Heading subtitle>
    A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
    </Heading>
    </Notification>
  </Section>
</div>
```
---
 
Configure the sizes of each secton using the ```size``` modifier. Set it to either `medium` or `large` size.

---

### **Medium Sections**

<div>
  <Section size="medium">
    <Container>
      <Notification color="info">
      <Heading>Section</Heading>
      <Heading subtitle>
       A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="medium">
    <Container>
      <Notification color="primary">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="medium">
    <Container>
      <Notification color="danger">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
</div>



```jsx
<div>
  <Section size="medium">
    <Container>
      <Notification color="info">
      <Heading>Section</Heading>
      <Heading subtitle>
       A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="medium">
    <Container>
      <Notification color="primary">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="medium">
    <Container>
      <Notification color="danger">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
</div>

```

**Large Sections**

<div>
  <Section size="large">
    <Container>
      <Notification color="info">
      <Heading>Section</Heading>
      <Heading subtitle>
       A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="large">
    <Container>
      <Notification color="primary">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="large">
    <Container>
      <Notification color="danger">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
</div>    



```jsx

<div>
  <Section size="large">
    <Container>
      <Notification color="info">
      <Heading>Section</Heading>
      <Heading subtitle>
       A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="large">
    <Container>
      <Notification color="primary">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
  <Section size="large">
    <Container>
      <Notification color="danger">
      <Heading>Section</Heading>
      <Heading subtitle>
      A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
      </Heading>
      </Notification>
    </Container>
  </Section>
</div>   
   
```

--- 

## Official documentation

https://bulma.io/documentation/layout/section

  
