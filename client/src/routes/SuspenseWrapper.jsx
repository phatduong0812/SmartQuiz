import { Suspense, lazy } from 'react'

import Loading from '../pages/Loading'

const SuspenseWrapper = (props) => {
    const { path } = props
    const LazyComponent = lazy(() => import(`../pages/${path}`))

    return (
        <Suspense fallback={<Loading />}>
            <LazyComponent />
        </Suspense>
    )
}

export default SuspenseWrapper
