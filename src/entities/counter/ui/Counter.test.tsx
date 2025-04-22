import { renderWithProviders } from 'shared/config/tests/renderWithProviders/renderWithProviders'
import { Counter } from './Counter'

describe('Counter', () => {
    test('counter', () => {
        const { getByTestId } = renderWithProviders(<Counter />, { initialState: { counter: { value: 0 } } })
        expect(getByTestId('value')).toHaveTextContent('0')
    })
    test('increment', () => {
        const { getByTestId } = renderWithProviders(<Counter />, { initialState: { counter: { value: 0 } } })

        const value = getByTestId('value')
        expect(value).toHaveTextContent('0')

        getByTestId('increment').click()

        expect(value).toHaveTextContent('1')
    })
    test('decrement', () => {
        const { getByTestId } = renderWithProviders(<Counter />, { initialState: { counter: { value: 0 } } })

        const value = getByTestId('value')
        expect(value).toHaveTextContent('0')

        getByTestId('decrement').click()

        expect(value).toHaveTextContent('-1')
    })
})
