import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
  size?: ButtonSize
}

export function ThemeSwitcher({ className, size }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={(cls.ThemeSwitcher, {}, className)}
            theme={ThemeButton.CLEAR}
            size={size}
        >
            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
        </Button>
    )
}
