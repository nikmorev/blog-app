import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog from Mr. Kotov',
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body 
            // className={inter.className}
        >
                {children}
        </body>
        </html>
    )
}

type RootLayoutProps = {
    children: React.ReactNode
}
