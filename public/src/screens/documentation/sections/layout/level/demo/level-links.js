import React from 'react';
import Image from 'react-bulma-components/lib/components/image';
import Level from 'react-bulma-components/lib/components/level';

const LevelLinksDemo = () => (
  <Level renderAs="nav">
    <Level.Item textAlignment="centered">
      <a>Home</a>
    </Level.Item>
    <Level.Item textAlignment="centered">
      <a>Menu</a>
    </Level.Item>
    <Level.Item textAlignment="centered">
      <img
        src="https://bulma.io/images/bulma-type.png"
        alt="bulma-logo"
        style={{ height: 30 }}
      />
    </Level.Item>
    <Level.Item textAlignment="centered">
      <a>Reservations</a>
    </Level.Item>
    <Level.Item textAlignment="centered">
      <a>Contact</a>
    </Level.Item>
  </Level>
);

LevelLinksDemo.reactCode = `<Level renderAs="nav">
  <Level.Item textAlignment="centered">
    <a>Home</a>
  </Level.Item>
  <Level.Item textAlignment="centered">
    <a>Menu</a>
  </Level.Item>
  <Level.Item textAlignment="centered">
    <img
      src="https://bulma.io/images/bulma-type.png"
      alt="bulma-logo"
      style={{ height: 30 }}
    />
  </Level.Item>
  <Level.Item textAlignment="centered">
    <a>Reservations</a>
  </Level.Item>
  <Level.Item textAlignment="centered">
    <a>Contact</a>
  </Level.Item>
</Level>;
`;

LevelLinksDemo.bulmaCode = `<nav class="level">
  <p class="level-item has-text-centered">
    <a class="link is-info">Home</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Menu</a>
  </p>
  <p class="level-item has-text-centered">
    <img
      src="https://bulma.io/images/bulma-type.png"
      alt="bulma-logo"
      style="height: 30px;"
    />
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Reservations</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Contact</a>
  </p>
</nav>;`;

export default LevelLinksDemo;
