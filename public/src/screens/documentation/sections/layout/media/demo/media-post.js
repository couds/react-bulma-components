import React from 'react';

import Content from 'react-bulma-components/lib/components/content';
import Icon from 'react-bulma-components/lib/components/icon';
import Level from 'react-bulma-components/lib/components/level';
import Image from 'react-bulma-components/lib/components/image';
import Media from 'react-bulma-components/lib/components/media';

const MediaPostDemo = () => (
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
          <strong>John Smith</strong> <small>@johnsmith</small>{' '}
          <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </Content>
      <Level renderAs="nav">
        <Level.Side align="left">
          <Icon icon="bars" size="small" color="info" />
          <Icon icon="retweet" size="small" />
          <Icon icon="heart" size="small" />
        </Level.Side>
      </Level>
    </Media.Item>
  </Media>
);

MediaPostDemo.reactCode = `<Media renderAs="article">
  <Media.Item renderAs="figure" position="left">
    <Image
      size={64}
      alt="64x64"
      src="https://bulma.io/images/placeholders/128x128.png"
    />
  </Media.Item>
  <Media.Item>
    <Content>
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small>{' '}
        <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
        sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </Content>
    <Level renderAs="level" className="is-mobile">
      <Level.Side align="left">
        <Level.Item>
          <Icon icon="reply" size="small" />
          <Icon icon="retweet" size="small" />
          <Icon icon="heart" size="small" />
        </Level.Item>
      </Level.Side>
    </Level>
  </Media.Item>
</Media>`;

MediaPostDemo.bulmaCode = `<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
        sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>`;

export default MediaPostDemo;
