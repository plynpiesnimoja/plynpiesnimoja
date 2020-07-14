import React from 'react';

import { cn } from 'src/lib/helpers'
import './styles.scss';

const Rule = ({ color, center, full, thick }) => {
  const Center = center ? 'center' : '';
  const Full = full ? 'full-length' : '';
  const Thick = (thick === 'large' ? 'large' : '') || (thick === 'big' ? 'big' : '') || (thick === 'mid' ? 'mid' : '') || (thick === 'small' ? 'small' : '');
  const Color = color === 'primary' ? 'Rule-primary' : 'Rule-default' || color === 'accent' ? 'Rule-accent' : 'Rule-default';
  const classes = cn('Rule', Color, Center, Full, Thick)
  return (
    <hr className={classes} tabIndex='-1' />
  )
}
export default Rule;