import React from 'react';
import {useRouteError} from "react-router-dom";

function ErrorPage() {
    // @ts-ignore
    const {statusText, status} = useRouteError();
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>

            <p>
                <i>{status} </i>
                <i>{statusText}</i>
            </p>

        </div>
    );
}


export default ErrorPage;
