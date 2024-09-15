import { Metadata } from 'next'
import './globals.css'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  title: "Retiishia",
  description: 'Welcome to My Portfolio!',
  openGraph: {
    title: 'Retiishia',
    description: 'Welcome to My Portfolio!',
    siteName: 'Retiishia.my.id',
    images: [
      {
        url: "/dashboard.png"
      }
    ],
    locale: 'en-GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retiishia',
    description: 'Welcome to my Portfolio!',
    creator: '@Retiishia',
    images: ['/dashboard.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
