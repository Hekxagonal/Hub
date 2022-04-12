import Component from '.';
import photoOne from '../../assets/profile.jpeg';

export default {
  title: 'Simple Components/Profile Photo',
  component: Component,
  args: {
    photo: photoOne,
  },
  argTypes: {
    photo: { type: 'string' },
  },
};

export const Profile_Photo = (args: any) => <Component {...args} />;
