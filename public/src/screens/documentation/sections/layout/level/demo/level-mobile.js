import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';

// TODO: remove is-mobile classname and use mobile prop instead
// master branch already has this feature
// but it is not released yet
const LevelMobile = () => (
  <Level className="is-mobile" renderAs="nav">
    <Level.Item textAlignment="centered">
      <div>
        <p className="heading">tweets</p>
        <Heading renderAs="p">3,456</Heading>
      </div>
    </Level.Item>
    <Level.Item textAlignment="centered">
      <div>
        <p className="heading">following</p>
        <Heading renderAs="p">123</Heading>
      </div>
    </Level.Item>
    <Level.Item textAlignment="centered">
      <div>
        <p className="heading">followers</p>
        <Heading renderAs="p">456K</Heading>
      </div>
    </Level.Item>
    <Level.Item textAlignment="centered">
      <div>
        <p className="heading">likes</p>
        <Heading renderAs="p">789</Heading>
      </div>
    </Level.Item>
  </Level>
);

LevelMobile.reactCode = `<Level mobile renderAs="nav">
  <Level.Item textAlignment="centered">
    <div>
      <p className="heading">tweets</p>
      <Heading renderAs="p">3,456</Heading>
    </div>
  </Level.Item>
  <Level.Item textAlignment="centered">
    <div>
      <p className="heading">following</p>
      <Heading renderAs="p">123</Heading>
    </div>
  </Level.Item>
  <Level.Item textAlignment="centered">
    <div>
      <p className="heading">followers</p>
      <Heading renderAs="p">456K</Heading>
    </div>
  </Level.Item>
  <Level.Item textAlignment="centered">
    <div>
      <p className="heading">likes</p>
      <Heading renderAs="p">789</Heading>
    </div>
  </Level.Item>
</Level>`;

LevelMobile.bulmaCode = `<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>`;

export default LevelMobile;
