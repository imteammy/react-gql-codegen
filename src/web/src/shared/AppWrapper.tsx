'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { PropsWithChildren, useState } from 'react';

const ONE_MINUTE = 60 * 1000;
const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            gcTime: ONE_MINUTE,
        },
        queries: {
            gcTime: ONE_MINUTE,
        },
    },
});
export default function AppWrapper({ children }: PropsWithChildren) {
    const [client] = useState(() => queryClient);
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools client={client} />
        </QueryClientProvider>
    );
}
