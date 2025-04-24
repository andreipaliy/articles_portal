import { classNames } from 'shared/lib/classNames'
import {
    ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef,
} from 'react'
import cls from './Input.module.scss'

type HTMLInputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'type'
>;

export interface InputProps extends HTMLInputAttributes {
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
  name?: string;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = ({
    value = '',
    onChange,
    type = 'text',
    className,
    name = '',
    autofocus = false,
    ...otherProps
}) => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autofocus) ref.current?.focus()
    }, [autofocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            {name.length && <label htmlFor='name'>{name}</label>}
            <input
                ref={ref}
                id={name}
                value={value}
                onChange={onChangeHandler}
                type={type}
                className={classNames(cls.Input, {}, [className])}
                {...otherProps}
            />
        </div>
    )
}
