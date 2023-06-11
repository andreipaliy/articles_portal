import { classNames } from 'shared/lib/classNames'
import cls from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const [t, u18n] = useTranslation()

  const toggleLanguage = () => {
    const currentLanguage = u18n.language
    u18n.changeLanguage(currentLanguage === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Language')}
    </Button>
  )
}
