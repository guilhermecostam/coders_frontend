import React from 'react';

import logo from '../../assets/images/logo.svg';

export default function Logo({ width, height }) {
  return (
    <img src={logo} width={width} height={height} alt="logo" />
  );
}
