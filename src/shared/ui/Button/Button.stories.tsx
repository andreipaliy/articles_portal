import { Meta, StoryFn } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import {
    Button, ButtonProps, ButtonSize, ButtonTheme,
} from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
}

export const OutlinedSizeS = Template.bind({})
OutlinedSizeS.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.S,
}
export const OutlinedSizeM = Template.bind({})
OutlinedSizeM.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.M,
}
export const OutlinedSizeL = Template.bind({})
OutlinedSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.L,
}
export const OutlinedSizeXL = Template.bind({})
OutlinedSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.XL,
}

export const OutlineDarkTheme = Template.bind({})
OutlineDarkTheme.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
}
OutlineDarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryBackground = Template.bind({})
PrimaryBackground.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
}

export const InvertedBackground = Template.bind({})
InvertedBackground.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const SquareSmall = Template.bind({})
SquareSmall.args = {
    children: '>',
    square: true,
    size: ButtonSize.S,
}

export const SquareMedium = Template.bind({})
SquareMedium.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
}

export const SquareLarge = Template.bind({})
SquareLarge.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
}

export const SquareExtraLarge = Template.bind({})
SquareExtraLarge.args = {
    children: '>',
    square: true,
    size: ButtonSize.XL,
}
