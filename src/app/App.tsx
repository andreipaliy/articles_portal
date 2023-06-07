import { Link, Route, Routes } from 'react-router-dom'
import 'app/styles/index.scss'
import { MainPageAsync } from '../pages/MainPage/ui/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
