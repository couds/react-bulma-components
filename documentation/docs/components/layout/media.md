---
id: media
title: Media
sidebar_label: Media
---

import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Level from 'react-bulma-components/lib/components/level';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';
import { Textarea, Field, Control } from 'react-bulma-components/lib/components/form';
const style = { background: '#e6e6e6', width: 64, height: 64 };



The media component is layout element that allows you to create repititive contents.

---
### **Import**


```shell
import Box from 'react-bulma-components/lib/components/box';
```

---

To create a media object

1. Create a media component using the ```<Media />``` tag

2. Add your contents by using the ```<Media.Item />``` tag.

---

## **Examples**

<Section>
<Box>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </Content>
            <Level breakpoint="mobile">
              <Level.Side align="left">
                <Button link>Like</Button>
                <Button link>Share</Button>
              </Level.Side>
            </Level>
          </Media.Item>
        </Media>
</Box>
</Section>
 

```jsx
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </Content>
            <Level breakpoint="mobile">
              <Level.Side align="left">
                <Button link>Like</Button>
                <Button link>Share</Button>
              </Level.Side>
            </Level>
          </Media.Item>
        </Media>
```


### **Right media**

Modify your contents position in the media container by using the `position` modifier. Set it to `left` or `right` to indicate the desired position.

<Section>
<Box>
        <Media>
          <Media.Item>
            <p>Lorem Ipsum</p>
          </Media.Item>
          <Media.Item renderAs="figure" position="right">
            <img style={style} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
        </Media>
</Box>
</Section>



```jsx
        <Media>
          <Media.Item>
            <p>Lorem Ipsum</p>
          </Media.Item>
          <Media.Item renderAs="figure" position="right">
            <img style={style} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
        </Media>
```



### **Nested Container**
Nest your `<media />` container for up to 3 levels.

<Section>
      <Box>
        <Media renderAs="article">
          <Media.Item position="left">
            <Image src="http://bulma.io/images/placeholders/128x128.png" size={64} />
          </Media.Item>
          <Media.Item position="center">
            <Content>
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </Content>
            <Media>
              <Media.Item position="left">
                <Image src="http://bulma.io/images/placeholders/128x128.png" size={48} />
              </Media.Item>
              <Media.Item position="center">
                <Content>
                  <p>
                    <strong>Sean Brown</strong>
                    <br />
                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </Content>
                <Media>
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                </Media>
                <Media>
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                </Media>
              </Media.Item>
            </Media>
            <Media>
              <Media.Item position="left">
                <Image src="http://bulma.io/images/placeholders/96x96.png" size={48} />
              </Media.Item>
              <Media.Item position="center">
                <Content>
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Media.Item>
        </Media>
        <Media renderAs="article">
          <Media.Item position="left">
            <Image src="http://bulma.io/images/placeholders/128x128.png" size={64} />
          </Media.Item>
          <Media.Item position="center">
            <Field>
              <Control renderAs="p">
                <Textarea placeholder="Add a comment..." />
              </Control>
            </Field>
            <Field>
              <Control renderAs="p">
                <Button>Post comment</Button>
              </Control>
            </Field>
          </Media.Item>
        </Media>
      </Box>
</Section>

  ```jsx
    <Section>
      <Box>
        <Media renderAs="article">
          <Media.Item position="left">
            <Image src="http://bulma.io/images/placeholders/128x128.png" size={64} />
          </Media.Item>
          <Media.Item position="center">
            <Content>
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </Content>
            <Media>
              <Media.Item position="left">
                <Image src="http://bulma.io/images/placeholders/128x128.png" size={48} />
              </Media.Item>
              <Media.Item position="center">
                <Content>
                  <p>
                    <strong>Sean Brown</strong>
                    <br />
                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </Content>
                <Media>
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                </Media>
                <Media>
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                </Media>
              </Media.Item>
            </Media>
            <Media>
              <Media.Item position="left">
                <Image src="http://bulma.io/images/placeholders/96x96.png" size={48} />
              </Media.Item>
              <Media.Item position="center">
                <Content>
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Media.Item>
        </Media>
        <Media renderAs="article">
          <Media.Item position="left">
            <Image src="http://bulma.io/images/placeholders/128x128.png" size={64} />
          </Media.Item>
          <Media.Item position="center">
            <Field>
              <Control renderAs="p">
                <Textarea placeholder="Add a comment..." />
              </Control>
            </Field>
            <Field>
              <Control renderAs="p">
                <Button>Post comment</Button>
              </Control>
            </Field>
          </Media.Item>
        </Media>
      </Box>
  </Section>
  ```



---

## Official documentation

https://bulma.io/documentation/layout/media-object



