import React from 'react';
import { Header } from '@cred/neopop-web/lib/components';
import { Back } from '@cred/neopop-web/lib/components';

const HeaderComp = () => {
  return (
    <Back
      heading="pay rent on CRED"
      color="black"
      description="pay using credit card and get exclusive rewards"
      onBackClick={() => {
        console.log('back clicked');
      }}
    />
  );
};

export default HeaderComp;
