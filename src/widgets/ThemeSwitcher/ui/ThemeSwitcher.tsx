import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Button
        onClick={toggleTheme}
        className={(cls.ThemeSwitcher, {}, className)}
        theme={ThemeButton.CLEAR}
      >
        {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
      </Button>
    </>
  )
}
