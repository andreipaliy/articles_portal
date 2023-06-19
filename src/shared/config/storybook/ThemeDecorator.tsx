import { Theme } from 'app/providers/ThemeProvider'
import { Story } from '@storybook/blocks'
import 'app/styles/index.scss'

// TODO: fix eslint formating ThemeDecorator in one line on Save
export const ThemeDecorator = (theme: Theme) => (StoryComponent:typeof Story) => (<div className={`app ${theme}`}><StoryComponent /></div>)
