import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTesting from 'shared/config/i18n/i18nForTesting'

export interface withRouterOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

const defaultOptions = {
    route: '/',
    initialState: {} as DeepPartial<StateSchema>,
}

export const renderWithProviders = (
    component: ReactNode,
    options: withRouterOptions = defaultOptions,
) => {
    const { route = '/', initialState = {} } = options

    return (render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTesting}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
            ,
        </StoreProvider>,
    ))
}
