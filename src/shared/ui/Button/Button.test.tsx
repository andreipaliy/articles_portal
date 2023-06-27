import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button component', () => {
    test('should render', () => {
        render(<Button>TestString</Button>)
        expect(screen.getByText('TestString')).toBeInTheDocument()
    })

    test('should render with class \'clear\'', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TestString</Button>)
        expect(screen.getByText('TestString')).toHaveClass('clear')
    })
})
