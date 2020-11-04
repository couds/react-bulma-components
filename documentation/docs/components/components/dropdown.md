---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Dropdown from 'react-bulma-components/lib/components/dropdown';

The Dropdown component is a container that is used for creating dropdown menus.

---

## **Import**

```js
import Dropdown from 'react-bulma-components/lib/components/dropdown';
```

<br />

### Dropdown elements

- `<Dropdown />` : main dropdown container.

  - `<Dropdown.Item />` : Container for adding contents into the dropdown menus

  - `<Dropdown.Divider />` : Divides your dropdown item with a line

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
<Section>
  <Dropdown>
    <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
    <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item value="divider">With divider</Dropdown.Item>
  </Dropdown>
</Section>
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

```jsx
<Section>
  <Dropdown hoverable value="item">
    <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
    <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item value="divider">With divider</Dropdown.Item>
  </Dropdown>
</Section>
```

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
<Section>
  <div>
    <Container>
      <Section size="large">
        <Dropdown value="item">
          <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
          <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
          <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
          <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item value="divider">With divider</Dropdown.Item>
        </Dropdown>
      </Section>
    </Container>
  </div>
</Section>
```

### **With color "info"**

<Section>
  <Dropdown color="info">
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
<Section>
  <Dropdown color="info">
    <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
    <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item value="divider">With divider</Dropdown.Item>
  </Dropdown>
</Section>
```

### **Hoverable with color 'info'**

<Section>
  <Dropdown hoverable value="item" color="info">
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
<Section>
  <Dropdown hoverable value="item" color="info">
    <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
    <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
    <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item value="divider">With divider</Dropdown.Item>
  </Dropdown>
</Section>
```

---

## Official documentation

https://bulma.io/documentation/components/dropdown
