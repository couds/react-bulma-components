import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';

const SocialMediaLevelDemo = () => (
  <Level renderAs="nav">
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

SocialMediaLevelDemo.reactCode = `<Level renderAs="nav">
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

SocialMediaLevelDemo.bulmaCode = `<nav class="level">
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

export default SocialMediaLevelDemo;
