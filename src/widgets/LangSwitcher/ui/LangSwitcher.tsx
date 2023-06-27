import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonSize } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
  size?: ButtonSize
  short?: boolean
}

export const LangSwitcher = ({ className, size, short }: LangSwitcherProps) => {
    const [t, u18n] = useTranslation()

    const toggleLanguage = () => {
        const currentLanguage = u18n.language
        u18n.changeLanguage(currentLanguage === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            onClick={toggleLanguage}
            className={classNames(cls.LangSwitcher, {}, [className])}
            size={size}
        >
            {short ? t('ShortLang') : t('Language')}
        </Button>
    )
}
