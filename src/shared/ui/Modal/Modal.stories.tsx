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
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsam. Corrupti, quisquam eos. Esse porro corporis quasi illum nobis! Corrupti placeat aspernatur deleniti reprehenderit, esse cupiditate eveniet nisi neque. Nobis Exercitationem eius saepe sint earum, numquam unde autem amet placeat ex repellat quod magnam fuga, natus molestiae dicta mollitia aliquam voluptates quidem laudantium reprehenderit quos perferendis. Illum quos laudantium debitis. Cupiditate vitae molestiae similique aspernatur libero voluptate, labore rerum inventore, obcaecati mollitia adipisci minus, ratione qui dignissimos hic! Magni voluptatibus, facilis ipsa quidem ut ab molestias amet possimus eveniet harum?',
    isOpen: true,
}
