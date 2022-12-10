import React, {lazy, Suspense} from "react";

const Counter = lazy(() => import('../pages/counter'));
const PageSecond = lazy(() => import('../pages/notes'));
const ErrorPage = lazy(() => import('../pages/error'));

export const routes = [
    {
        path: "/",
        element: <Suspense fallback={<>...</>}>
            <Counter/>
        </Suspense>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/second",
        element: <Suspense fallback={<>...</>}>
            <PageSecond/>
        </Suspense>,
    },
]
