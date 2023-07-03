import { classNames } from 'shared/lib/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    square,
    size,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
    }

    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
