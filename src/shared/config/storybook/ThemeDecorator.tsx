import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { Story } from '@storybook/blocks'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (StoryComponent:typeof Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={
            `app ${theme}`
        }
        >
            <StoryComponent />
        </div>
    </ThemeProvider>
)
