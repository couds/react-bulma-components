---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import Box from 'react-bulma-components/lib/components/box';

The Dropdown component is a container that is used for creating dropdown menus.

---
### **Import**


```shell
import Dropdown from 'react-bulma-components/lib/components/dropdown';
```

---
### Dropdown elements

* `<Dropdown />` : main dropdown container.

  * `<Dropdown.Item />` : Container for adding contents into the dropdown menus 

  * `<Dropdown.Divider />` : Divides your dropdown item with a line


### Dropdown Modifiers

* `hoverable`

* `color`

---

## **Examples**



<Section>
<Dropdown>
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
</Dropdown>
</Section>



```jsx
<Dropdown>
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
</Dropdown>

```




### **Hoverable Dropdown**

<Section>
<Dropdown hoverable value="item">
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
</Dropdown>
</Section>

<Box>

```jsx
<Dropdown hoverable value="item">
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
</Dropdown>

```

</Box>

### **Alignment**

<Section>
<div>
      <Container>
        <Section size="large">
          <Dropdown
            value="item">
            <Dropdown.Item value="item" >
              Dropdown item
            </Dropdown.Item>
            <Dropdown.Item value="other">
              Other Dropdown item
            </Dropdown.Item>
            <Dropdown.Item value="active">
              Active Dropdown item
            </Dropdown.Item>
            <Dropdown.Item value="other 2">
              Other Dropdown item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item value="divider">
              With divider
            </Dropdown.Item>
          </Dropdown>
        </Section>
      </Container>
</div>
</Section>



```jsx
      <Container>
        <Section size="large">
          <Dropdown
            value="item">
            <Dropdown.Item value="item" >
              Dropdown item
            </Dropdown.Item>
            <Dropdown.Item value="other">
              Other Dropdown item
            </Dropdown.Item>
            <Dropdown.Item value="active">
              Active Dropdown item
            </Dropdown.Item>
            <Dropdown.Item value="other 2">
              Other Dropdown item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item value="divider">
              With divider
            </Dropdown.Item>
          </Dropdown>
        </Section>
      </Container>

```


### **With color "info"**

<Section>
<Dropdown
        color="info">
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">
          With divider
        </Dropdown.Item>
</Dropdown>
</Section>

```jsx
<Dropdown
        color="info">
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">
          With divider
        </Dropdown.Item>
</Dropdown>
```


### **Hoverable with color 'info'**

<Section>
<Dropdown
        hoverable value="item"
        color="info">
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">
          With divider
        </Dropdown.Item>
</Dropdown>
</Section>



```jsx
<Dropdown
        hoverable value="item"
        color="info">
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">
          With divider
        </Dropdown.Item>
</Dropdown>
```

---

## Official documentation


https://bulma.io/documentation/components/dropdown

