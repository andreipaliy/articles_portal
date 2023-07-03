import { Meta, StoryFn } from '@storybook/react'
import {
    Modal, ModalProps,
} from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />

// TODO: to write styling of modal based on current theme + write story for it
export const Primary = Template.bind({})
Primary.args = {
    children: 'Lorem ipsum',
    isOpen: true,
}
