import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import {
    Modal, ModalProps,
} from './Modal'

const dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsam. Corrupti, quisquam eos. Esse porro corporis quasi illum nobis! Corrupti placeat aspernatur deleniti reprehenderit, esse cupiditate eveniet nisi neque. Nobis Exercitationem eius saepe sint earum, numquam unde autem amet placeat ex repellat quod magnam fuga, natus molestiae dicta mollitia aliquam voluptates quidem laudantium reprehenderit quos perferendis. Illum quos laudantium debitis. Cupiditate vitae molestiae similique aspernatur libero voluptate, labore rerum inventore, obcaecati mollitia adipisci minus, ratione qui dignissimos hic! Magni voluptatibus, facilis ipsa quidem ut ab molestias amet possimus eveniet harum?'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>

// TODO: to make it render inside the div with 'app' id so that it inherits the theme styles
const Template: StoryFn<ModalProps> = (args) => (
    <Modal {...args} />
)

export const Light = Template.bind({})
Light.args = {
    children: dummyText,
    isOpen: true,
}

export const Dark = Template.bind({})
Dark.args = {
    children: dummyText,
    isOpen: true,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
