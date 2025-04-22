import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
    test('increment', () => {
        const state = { value: 0 }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 })
    })
    test('decrement', () => {
        const state = { value: 0 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: -1 })
    })
    test('incrementByAmount', () => {
        const state = { value: 0 }
        expect(counterReducer(state, counterActions.incrementByAmount(5))).toEqual({ value: 5 })
    })
    test('decrementByAmount', () => {
        const state = { value: 0 }
        expect(counterReducer(state, counterActions.decrementByAmount(5))).toEqual({ value: -5 })
    })
    test('should work with initial state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
})
