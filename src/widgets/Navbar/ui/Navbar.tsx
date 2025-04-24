import { classNames } from 'shared/lib/classNames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [t] = useTranslation()

    const [isAuthModalOpen, setAuthModalOpen] = useState(false)

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type='button'
                onClick={() => setAuthModalOpen(true)}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {t('Sign in')}
            </Button>

            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={() => setAuthModalOpen(false)}
            />
        </div>
    )
}
