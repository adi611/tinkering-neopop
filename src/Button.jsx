import React from 'react';
import { Button } from '@cred/neopop-web/lib/components';
import './Page.css';

const ButtonComp = (props) => {
  return (
    <Button
      variant="primary"
      kind="elevated"
      size="big"
      colorMode="dark"
      style={props.style}
      onClick={() => {
        console.log("I'm clicked");
      }}
    >
      {props.buttonType}
    </Button>
  );
};

export default ButtonComp;
