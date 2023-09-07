import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone);

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-brandon text-black-2">
                {/* Header */}
                <Header></Header>

                {/* Content */}
                <div className="h-32">{children}</div>

                {/* Footer */}
                <Footer></Footer>
            </body>
        </html>
    );
}