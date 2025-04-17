import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode,
  target?: HTMLElement
}

export const Portal = ({ children, target }: PortalProps) => {
    const targetElement = target ?? document.getElementById('app') ?? document.body

    return (
        createPortal(children, targetElement)
    )
}
