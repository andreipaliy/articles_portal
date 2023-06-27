import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NavLink, NavLinkTheme } from './NavLink'

export default {
    title: 'shared/AppLink',
    component: NavLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Text',
    },
} as Meta<typeof NavLink>

const Template: StoryFn<typeof NavLink> = (args) => <NavLink to='' {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: NavLinkTheme.PRIMARY,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    theme: NavLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
    theme: NavLinkTheme.SECONDARY,
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    theme: NavLinkTheme.SECONDARY,
}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
