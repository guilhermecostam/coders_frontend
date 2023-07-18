import logo from 'images/logo.svg';
import React from 'react';

export default function Logo({ width, height, style }) {
  return (
    <img src={logo} width={width} height={height} style={{ ...style }} alt="logo" />
  );
}
