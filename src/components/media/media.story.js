import React from 'react';

import { Media, Image, Content, Button, Section, Box, Form } from '../..';

export const Default = () => {
  return (
    <Section>
      <Box>
        <Media renderAs="article">
          <Media.Item align="left">
            <Image
              src="http://bulma.io/images/placeholders/128x128.png"
              size={64}
            />
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta eros lacus, nec ultricies elit blandit non. Suspendisse
                pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                tempus turpis.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 3 hrs
                </small>
              </p>
            </Content>

            <Media>
              <Media.Item align="left">
                <Image
                  src="http://bulma.io/images/placeholders/128x128.png"
                  size={48}
                />
              </Media.Item>
              <Media.Item align="center">
                <Content>
                  <p>
                    <strong>Sean Brown</strong>
                    <br />
                    Donec sollicitudin urna eget eros malesuada sagittis.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam blandit nisl a
                    nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
                  </p>
                </Content>

                <Media>
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi
                  eu lorem cursus ullamcorper sit amet nec massa.
                </Media>

                <Media>
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                  Praesent malesuada metus sed pharetra euismod. Cras tellus
                  odio, tincidunt iaculis diam non, porta aliquet tortor.
                </Media>
              </Media.Item>
            </Media>

            <Media>
              <Media.Item align="left">
                <Image
                  src="http://bulma.io/images/placeholders/96x96.png"
                  size={48}
                />
              </Media.Item>
              <Media.Item align="center">
                <Content>
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis
                    vel. Maecenas varius felis sit amet magna vestibulum euismod
                    malesuada cursus libero. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Media.Item>
        </Media>
        <Media renderAs="article">
          <Media.Item align="left">
            <Image
              src="http://bulma.io/images/placeholders/128x128.png"
              size={64}
            />
          </Media.Item>
          <Media.Item align="center">
            <Form.Field>
              <Form.Control renderAs="p">
                <Form.Textarea placeholder="Add a comment..." />
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control renderAs="p">
                <Button>Post comment</Button>
              </Form.Control>
            </Form.Field>
          </Media.Item>
        </Media>
      </Box>
    </Section>
  );
};
