import React from 'react';

import { AreaInputIcon, AreaInput, Input, AreaIcon, IconUser } from './styles';

export default function InputIcon() {
  return (
    <AreaInputIcon>
      <AreaInput>
        <Input />
      </AreaInput>
      <AreaIcon>
        <IconUser />
      </AreaIcon>
    </AreaInputIcon>
  );
}
