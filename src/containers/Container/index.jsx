import React from 'react';

import { ContainerStyles } from './styles';

export default function Container({ children }) {
  return (
    <ContainerStyles>{ children }</ContainerStyles>
  );
}
