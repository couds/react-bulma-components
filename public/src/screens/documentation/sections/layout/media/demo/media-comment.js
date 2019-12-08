import React from 'react';

import Button from 'react-bulma-components/lib/components/button';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Checkbox from 'react-bulma-components/lib/components/form/components/checkbox';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Image from 'react-bulma-components/lib/components/image';
import Level from 'react-bulma-components/lib/components/level';
import Media from 'react-bulma-components/lib/components/media';
import Textarea from 'react-bulma-components/lib/components/form/components/textarea';

const MediaCommentDemo = () => (
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
          <Textarea placeholder="Add a comment..." />
        </Control>
      </Field>
      <Level>
        <Level.Side align="left">
          <Level.Item>
            <Button color="info">Submit</Button>
          </Level.Item>
        </Level.Side>
        <Level.Side align="right">
          <Level.Item>
            <Field>
              <Control>
                <Checkbox>
                  Press enter to submit
                </Checkbox>
              </Control>
            </Field>
          </Level.Item>
        </Level.Side>
      </Level>
    </Media.Item>
  </Media>
);

MediaCommentDemo.reactCode = `<Media>
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
        <Textarea placeholder="Add a comment..." />
      </Control>
    </Field>
    <Level>
      <Level.Item align="left">
        <Button color="info">Submit</Button>
      </Level.Item>
      <Level.Item align="right">
        <Field>
          <Control>
            <Checkbox>
              Press enter to submit
            </Checkbox>
          </Control>
        </Field>
      </Level.Item>
    </Level>
  </Media.Item>
</Media>`;

MediaCommentDemo.bulmaCode = `<article class="media">
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
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a class="button is-info">Submit</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox">
            <input type="checkbox"> Press enter to submit
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>`;

export default MediaCommentDemo;
