import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import Layout from "./components/Layout";
import "./tailwind.css";
// import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  // { rel: "stylesheet", href: styles },
];

export default function App() {
  const [queryClient] = useState(new QueryClient());

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Outlet />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
