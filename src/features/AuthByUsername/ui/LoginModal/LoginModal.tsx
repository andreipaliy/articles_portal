import { classNames } from 'shared/lib/classNames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

export interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    className?: string
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
        className={classNames(undefined, {}, [className])}
    >
        <LoginForm />
    </Modal>
)
