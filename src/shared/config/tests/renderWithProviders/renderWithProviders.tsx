import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTesting from 'shared/config/i18n/i18nForTesting'

export interface withRouterOptions {
    route?: string
}

export const renderWithProviders = (
    component: ReactNode,
    options: withRouterOptions =
    { route: '/' },
) => (render(
    <MemoryRouter initialEntries={[options.route]}>
        <I18nextProvider i18n={i18nForTesting}>
            {component}
        </I18nextProvider>
    </MemoryRouter>,
))
