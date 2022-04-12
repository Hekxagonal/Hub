import Component from '.';

export default {
  title: 'Simple Component/Skill Bubble',
  component: Component,
  args: {
    title: 'JavaScript',
  },
  argTypes: {
    title: { type: 'string' },
  },
};

export const JavaScript = (args: any) => <Component {...args} />;
