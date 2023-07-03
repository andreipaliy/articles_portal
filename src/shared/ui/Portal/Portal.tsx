import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode,
  target?: HTMLElement
}

export const Portal = ({ children, target = document.body }: PortalProps) => (
    createPortal(children, target)
)
