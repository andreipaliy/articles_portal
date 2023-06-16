import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t('Oops, something went wrong')}</h2>
            <Button onClick={reloadPage}>
                {t('Go to the main page')}
            </Button>
        </div>
    )
}
