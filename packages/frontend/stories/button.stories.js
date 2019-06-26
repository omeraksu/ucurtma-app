import React from 'react';
import { text, color, select } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/ui/button';

storiesOf('Button', module)
  .add('Default Button', () => (
    <Button
      onClick={action('clicked')}
      tag={select('Tag', ['a', 'button'], 'button')}
      className={text('Classname', 'mt-10 ml-10')}
      color={color('Color')}
      textColor={color('Text Color')}
      type={select('Type', ['outlined', 'flat', 'bg'], 'outlined')}
    >
      {text('Button Text', 'Click Here')}
    </Button>
  ))
  .add('Flat Button', () => (
    <Button
      onClick={action('clicked')}
      tag={select('Tag', ['a', 'button'], 'button')}
      className={text('Classname', 'mt-10 ml-10')}
      color={color('Color')}
      textColor={color('Text Color')}
      type={select('Type', ['outlined', 'flat', 'bg'], 'flat')}
    >
      {text('Button Text', 'Click Here')}
    </Button>
  ))
  .add('Button with Background', () => (
    <Button
      onClick={action('clicked')}
      tag={select('Tag', ['a', 'button'], 'button')}
      className={text('Classname', 'mt-10 ml-10')}
      color={color('Color')}
      textColor={color('Text Color')}
      type={select('Type', ['outlined', 'flat', 'bg'], 'bg')}
    >
      {text('Button Text', 'Click Here')}
    </Button>
  ));
