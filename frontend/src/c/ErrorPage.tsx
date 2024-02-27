import {
    useRouteError,
} from "react-router-dom"

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id='error'>
            <h1>Error!</h1>
            <p>Something went wrong</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}