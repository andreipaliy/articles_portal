import { classNames } from 'shared/lib/classNames'
import { useState } from 'react'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/ui'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { NavLink, NavLinkTheme } from 'shared/ui/NavLink/NavLink'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [t] = useTranslation()

    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => setCollapsed((prev) => !prev)

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={classNames(cls.links, { [cls.linksollapsed]: collapsed }, [])}>
                <NavLink
                    to={RoutePaths.main}
                    theme={NavLinkTheme.SECONDARY}
                    className={classNames(cls.link, {}, [])}
                >
                    <HomeIcon className={classNames(cls.icon)} />
                    {!collapsed && <span>{t('Main')}</span>}
                </NavLink>
                <NavLink
                    theme={NavLinkTheme.SECONDARY}
                    to={RoutePaths.about}
                    className={classNames(cls.mainLink, {}, [cls.link])}
                >
                    <AboutIcon className={classNames(cls.icon)} />
                    {!collapsed && <span>{t('About')}</span>}
                </NavLink>
            </div>
            <Button
                data-testid='sidebar-toggle-btn'
                onClick={toggleCollapsed}
                square
                className={cls.sidebarToggleBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher size={collapsed ? ButtonSize.S : ButtonSize.M} />
                <LangSwitcher size={collapsed ? ButtonSize.S : ButtonSize.M} short={collapsed} />
            </div>
        </div>
    )
}
