import React from 'react';

import Button from 'react-bulma-components/lib/components/button';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Content from 'react-bulma-components/lib/components/content';
import Image from 'react-bulma-components/lib/components/image';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Textarea from 'react-bulma-components/lib/components/form/components/textarea';
import Media from 'react-bulma-components/lib/components/media';

const MediaNestedDemo = () => (
  <>
    <Media>
      <Media.Item renderAs="figure" position="left">
        <Image
          size={64}
          alt="64x64"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Media.Item>
      <Media.Item>
        <Content>
          <p>
            <strong>Barbara Middleton</strong>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit
            non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br/>
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Content>
              <p>
                <strong>Sean Brown</strong>
                <br/>
                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
                feugiat.
              </p>
            </Content>
            <Media>
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
              massa.
            </Media>
            <Media>
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
              euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
            </Media>
          </Media.Item>
        </Media>

        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Content>
              <p>
                <strong>Kayli Eunice</strong>
                <br/>
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna
                vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                <br/>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </Content>
          </Media.Item>
        </Media>

      </Media.Item>
    </Media>
    <Media>
      <Media.Item renderAs="figure" position="left">
        <Image
          size={64}
          alt="64x64"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Media.Item>
      <Media.Item>
        <Field>
          <Control>
            <Textarea placeholder="Add a comment..."/>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button>Post comment</Button>
          </Control>
        </Field>
      </Media.Item>
    </Media>
  </>
);

MediaNestedDemo.reactCode = `<>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image
        size={64}
        alt="64x64"
        src="http://bulma.io/images/placeholders/128x128.png"
      />
    </Media.Item>
    <Media.Item>
      <Content>
        <p>
          <strong>Barbara Middleton</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit
          non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        </p>
      </Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="http://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Content>
            <p>
              <strong>Sean Brown</strong>
              <br/>
              Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
              feugiat.
            </p>
          </Content>
          <Media>
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
            massa.
          </Media>
          <Media>
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
            euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
          </Media>
        </Media.Item>
      </Media>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="http://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Content>
            <p>
              <strong>Kayli Eunice</strong>
              <br/>
              Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna
              vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
              <br/>
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </Content>
        </Media.Item>
      </Media>
    </Media.Item>
  </Media>
  <Media>
    <Media.Item renderAs="figure" position="left">
      <Image
        size={64}
        alt="64x64"
        src="http://bulma.io/images/placeholders/128x128.png"
      />
    </Media.Item>
    <Media.Item>
      <Field>
        <Control>
          <Textarea placeholder="Add a comment..."/>
        </Control>
      </Field>
      <Field>
        <Control>
          <Button>Post comment</Button>
        </Control>
      </Field>
    </Media.Item>
  </Media>
</>`;

MediaNestedDemo.bulmaCode = `<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit
        non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br>
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Sean Brown</strong>
            <br>
            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
            <br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>

        <article class="media">
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
          massa.
        </article>

        <article class="media">
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
          euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
        </article>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Kayli Eunice </strong>
            <br>
            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna
            vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</article>
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button">Post comment</button>
      </p>
    </div>
  </div>
</article>`;

export default MediaNestedDemo;
