---
id: footer
title: Footer
sidebar_label: Footer
---

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

The footer component can be used to structure the bottom part of your page layout. The footer element is a simple container with lots of padding and can coontain other elements.

### **Import**

```js
import Footer from 'react-bulma-components/lib/components/footer';
```

<br />

| Variable name | Type          | Default values |
| ------------- | ------------- | -------------- |
| `classNames`  | string        | `undefined`    |
| `style`       | shape         | `undefined`    |
| `breakpoint`  | breakpoints   | `undefined`    |
| `renderAs`    | renderAsShape | `div`          |

---

## **Example**

Use the `<Footer />` tag to create a footer container.

<div> 
  <Hero size="fullheight">
    <Hero.Head renderAs="header" />
    <Hero.Body>
      <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
    </Hero.Body>
    <Hero.Footer>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </Content>
        </Container>
      </Footer>
    </Hero.Footer>
  </Hero>
</div>

```jsx
<div>
  <Hero size="fullheight">
    <Hero.Head renderAs="header" />
    <Hero.Body>
      <p>
        Lorem ipsum
        <sup>
          <a>[1]</a>
        </sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
        ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh
        eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat
        vel, interdum mattis neque. Sub<sub>script</sub> works as well!
      </p>
    </Hero.Body>
    <Hero.Footer>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Bulma</strong> by{' '}
              <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
              website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>.
            </p>
          </Content>
        </Container>
      </Footer>
    </Hero.Footer>
  </Hero>
</div>
```

---

## Official documentation

https://bulma.io/documentation/layout/footer
