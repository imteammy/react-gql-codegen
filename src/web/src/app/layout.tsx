import type { Metadata } from 'next';
import './globals.css';
import AppWrapper from '@/shared/AppWrapper';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppWrapper>{children}</AppWrapper>
            </body>
        </html>
    );
}
