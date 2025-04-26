import { loginActions, loginReducer } from './loginSlice'

describe('counterSlice', () => {
    test('setUsername', () => {
        const state = { username: '', password: '', isLoading: false }
        expect(loginReducer(state, loginActions.setUsername('SomethingSuperUniq'))).toEqual({ username: 'SomethingSuperUniq', password: '', isLoading: false })
    })
})
