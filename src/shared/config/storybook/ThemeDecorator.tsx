import { Theme } from 'app/providers/ThemeProvider'
import { Story } from '@storybook/blocks'
import 'app/styles/index.scss'

// eslint-disable-next-line max-len
export const ThemeDecorator = (theme: Theme) => (StoryComponent:typeof Story) => (<div className={`app ${theme}`}><StoryComponent /></div>)
