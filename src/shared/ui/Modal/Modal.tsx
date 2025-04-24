import { classNames } from 'shared/lib/classNames'
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

export interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DURATION = 300

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy = false,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        if (isOpen) setIsMounted(true)
    }, [isOpen])

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)

            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DURATION)
        }
    }, [onClose])

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onCloseHandler()
            }
        },
        [onCloseHandler],
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscapeKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onEscapeKeyDown)
        }
    }, [isOpen, onEscapeKeyDown])

    const onContentClick = (event: React.MouseEvent) => event.stopPropagation()

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(
                    cls.Modal,
                    {
                        [cls.opened]: isOpen,
                        [cls.isClosing]: isClosing,
                    },
                    [className],
                )}
            >
                <div className={classNames(cls.overlay)} onClick={onCloseHandler}>
                    <div className={classNames(cls.content)} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
