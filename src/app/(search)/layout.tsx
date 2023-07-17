"use client";

import { SWRConfig } from "swr"

export default function SearchLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
    <>
        <SWRConfig value={{
            onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.status === 404) return
            if (retryCount >= 10) return
            setTimeout(() => revalidate({ retryCount }), 10000)
            }
        }}>
            {children}
        </SWRConfig>
    </>
    )
  }