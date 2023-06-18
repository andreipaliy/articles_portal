import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar component', () => {
    test('should render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('should have collapsed class when clicking on toggle button', () => {
        renderWithTranslation(<Sidebar />)

        const toggleButton = screen.getByTestId('sidebar-toggle-btn')
        const sidebar = screen.getByTestId('sidebar')

        expect(sidebar).toBeInTheDocument()

        fireEvent.click(toggleButton)
        expect(sidebar).toHaveClass('collapsed')
    })

    test('should not have collapsed class when clicking on toggle button second', () => {
        renderWithTranslation(<Sidebar />)

        const toggleButton = screen.getByTestId('sidebar-toggle-btn')
        const sidebar = screen.getByTestId('sidebar')

        expect(sidebar).toBeInTheDocument()

        fireEvent.click(toggleButton)
        fireEvent.click(toggleButton)

        expect(sidebar).not.toHaveClass('collapsed')
    })
})
