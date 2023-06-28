import { Meta, StoryFn } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Text',
    },
} as Meta<typeof AppLink>

const Template: StoryFn<typeof AppLink> = (args) => <AppLink to='' {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
}
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
