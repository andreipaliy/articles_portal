import { Story } from '@storybook/blocks'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent:typeof Story) => (
    <BrowserRouter><StoryComponent /></BrowserRouter>)
