import React from 'react';
import { GlobalStyles } from '@common/app/GlobalStyles';
import { Routing } from '../../router';

export function App(): JSX.Element {
  return (
    <div>
      <GlobalStyles />
      <Routing />
    </div>
  );
}
