import { classNames } from 'shared/lib/classNames'
import { LinkProps } from 'react-router-dom'
import { FC } from 'react'
import cls from './NavLink.module.scss'

export enum NavLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface NavLinkProps extends LinkProps {
  className?: string
  theme?: NavLinkTheme
}

export const NavLink: FC<NavLinkProps> = ({
    className,
    children,
    to,
    theme = NavLinkTheme.PRIMARY,
    ...otherProps
}: NavLinkProps) => (
    <NavLink
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        to={to}
        {...otherProps}
    >
        {children}
    </NavLink>
)
