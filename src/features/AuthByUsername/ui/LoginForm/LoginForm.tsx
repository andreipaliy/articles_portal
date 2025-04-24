import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useState } from 'react'
import cls from './LoginForm.module.scss'

export const LoginForm = () => {
    const { t } = useTranslation('login')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={classNames(cls.LoginForm)}>
            <Input
                value={username}
                onChange={setUsername}
                autofocus
                name={t('Username')}
                placeholder={t('Type here your username')}
            />
            <Input
                value={password}
                onChange={setPassword}
                name={t('Password')}
                type='password'
                placeholder={t('Type here your password')}
            />
            <Button className={classNames(cls.button)}>{t('Sign In')}</Button>
        </div>
    )
}
