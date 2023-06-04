import React from 'react';
import type {CSSObject} from 'styled-components';
import * as svg from './svg/index';

interface IMyIconProps {
  name: 'chevron';
  className?: string;
  style?: CSSObject;
}

const MyIcon = ({name, className, style}: IMyIconProps) => {
  return React.createElement(svg[name], {
    className,
    style,
    'aria-hidden': 'true',
  });
};

export default MyIcon;
