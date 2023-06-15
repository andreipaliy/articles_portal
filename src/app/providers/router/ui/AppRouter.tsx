import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <div className='page-wrapper'>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route path={path} element={element} key={path} />
                ))}
            </Routes>
        </div>
    </Suspense>
)
