import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Modal from '.';
import Image from '../image';
import Media from '../media';
import Button from '../button';
import Content from '../content';
import Level from '../level';

class OpenModal extends React.Component {
  static propTypes = {
    modal: PropTypes.object,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    modal: {},
  }

  state = {
    show: false,
  }

  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });

  render() {
    return (
      <div>
        <Button onClick={this.open}>Open</Button>
        <Modal show={this.state.show} onClose={this.close} {...this.props.modal}>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

storiesOf('Modal', module)
  .addDecorator(story => (
    <div style={{ margin: 10, display: 'relative' }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <OpenModal>
      <Modal.Content>
        <Image src="http://bulma.io/images/placeholders/1280x960.png" size="4by3" />
      </Modal.Content>
    </OpenModal>
  )))
  .add('Modal Card', withInfo()(() => (
    <OpenModal modal={{ closeOnBlur: true }}>
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>
            Title
          </Modal.Card.Title>
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
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
        </Modal.Card.Body>
        <Modal.Card.Foot style={{ alignItems: 'center', justifyContent: 'center' }}>
          <p>
            Lorem Ipsum...
          </p>
        </Modal.Card.Foot>
      </Modal.Card>
    </OpenModal>
  )));
