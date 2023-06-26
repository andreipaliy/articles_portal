import { classNames } from 'shared/lib/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outlined'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}) => (
    <button
        type='button'
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
)
