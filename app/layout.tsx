import type { Metadata } from 'next';

import { atkinsonHyperlegible } from './fonts';

import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: 'Dan Stelljes',
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${atkinsonHyperlegible.className}`}>
        <div className={styles['container']}>
          <h1 className={styles['site-title']}>{metadata.title}</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
