// exported from '@storybook/angular'
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonModule, Button } from 'primeng/button';

// Link: https://www.primefaces.org/primeng-v13/button
// <button pButton type="button" label="Click" ></button>
const meta: Meta<Button> = {
  title: 'Example/primeNG Buttons',
  component: Button,
  decorators: [moduleMetadata({ imports: [ButtonModule] })],
  render: (args) => ({
    props: {
      ...args,
    },
  }),
};

/*

*/

export default meta;

export const Click: StoryObj<Button> = {
  args: {
    label: 'Click',
    icon: 'pi pi-times',
    iconPos: 'right',
  },
};

export const Accept: StoryObj<Button> = {
  args: {
    label: 'Accept',
    icon: 'pi pi-check',
    iconPos: 'left',
  },
};

export const Primary: StoryObj<Button> = {
  args: {
    label: 'Button with icon',
    icon: 'pi pi-check',
    iconPos: 'left',
  },
};
