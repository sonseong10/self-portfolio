import React from 'react';
import type {CSSObject} from 'styled-components';

interface IMyIconProps {
  name: string;
  className?: string;
  style?: CSSObject;
}

const MyIcon = ({name, className, style}: IMyIconProps) => {
  return React.createElement(name, {
    className,
    style,
    'aria-hidden': 'true',
  });
};

export default MyIcon;
