import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Icon from ".";

storiesOf("Icon", module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add(
    "Default",
    withInfo()(() => (
      <div>
        <Icon icon="bars" color="info" />
        <Icon icon="angle-down" />
      </div>
    ))
  )
  .add(
    "Custom Icon",
    withInfo({
      text: `
        Notice: Icon component only prepares space for the icon. You need to import the icon library of your choice extra. See the example below for Font Awesome:

        ~~~js
          import Icon from 'react-bulma-components/lib/components/icon';
        
          import FontAwesomeIcon from '@fortawesome/react-fontawesome';
          import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus';
          
          <Icon>
            <FontAwesomeIcon icon={faUserPlus} />
          </Icon>
        ~~~
      `
    })(() => (
      <div>
        <Icon>
          <span className="rbc rbc-bars" />
        </Icon>
      </div>
    ))
  );
