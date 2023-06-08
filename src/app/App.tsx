import { Link, Route, Routes } from 'react-router-dom'
import 'app/styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from './providers/router/ui'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}
