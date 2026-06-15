import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/app.css";

const SITE_URL = (
    import.meta.env.VITE_SITE_URL ?? "http://localhost:5173"
).replace(/\/$/, "");
const SITE_TITLE = "Charlize's Website";
const SITE_DESCRIPTION = "Charlize San Gabriel's portfolio website";
const SHARE_IMAGE = `${SITE_URL}/images/portfolioIMG.jpeg`;

export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Play:wght@400;700&display=swap",
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={SITE_TITLE} />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={SITE_DESCRIPTION} />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:image" content={SHARE_IMAGE} />
                <meta property="og:image:alt" content={SITE_DESCRIPTION} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={SITE_TITLE} />
                <meta name="twitter:description" content={SITE_DESCRIPTION} />
                <meta name="twitter:image" content={SHARE_IMAGE} />
                <meta name="description" content={SITE_DESCRIPTION} />
                <link rel="canonical" href={SITE_URL} />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
