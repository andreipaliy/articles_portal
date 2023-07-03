import { classNames } from 'shared/lib/classNames'
import { useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [t] = useTranslation()

    const [isAuthModalOpen, setAuthModalOpen] = useState(false)
    const onToggleAuthModalOpen = () => setAuthModalOpen((prev) => !prev)

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type='button'
                onClick={() => onToggleAuthModalOpen()}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {t('Sign in')}
            </Button>

            <Modal
                isOpen={isAuthModalOpen}
                onClose={() => onToggleAuthModalOpen()}
            >
                <button type='button' onClick={() => onToggleAuthModalOpen()}>{t('Close')}</button>
            </Modal>
        </div>
    )
}
