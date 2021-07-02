import React from 'react';

import { Test } from './Test';

export default {
  title: 'Example/Test',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const Defaut = Template.bind({});
Defaut.args = {
  size: 'medium',
}

export const ActiveTest = Template.bind({});
ActiveTest.args = {
  active: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};
