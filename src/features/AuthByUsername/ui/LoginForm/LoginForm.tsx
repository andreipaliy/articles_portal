import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/seleectors/getLoginData'
import { loginByUsername } from '../../model/services/loginByUsername'
import cls from './LoginForm.module.scss'

export const LoginForm = () => {
    const { t } = useTranslation('login')

    const dispatch = useDispatch()

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm)}>
            <Text title={t('Authorization')} />
            <Input
                value={username}
                onChange={onChangeUsername}
                autofocus
                name={t('Username')}
                placeholder={t('Type here your username')}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                name={t('Password')}
                type='password'
                placeholder={t('Type here your password')}
            />
            <Text text={error} theme={TextTheme.ERROR} />
            <Button onClick={onLoginHandler} disabled={isLoading} className={classNames(cls.button)}>
                {t('Sign In')}
            </Button>
        </div>
    )
}
