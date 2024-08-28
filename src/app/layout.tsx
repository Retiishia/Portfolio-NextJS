import './globals.css'

export const metadata = {
  title: "Retiishia - Portfolio",
  description: 'Welcome to my Portfolio!',
  openGraph: {
    title: 'Retiishia',
    description: 'Welcome to my Portfolio!',
    siteName: 'retiishia.dev',
    images: [
      {
        url: "/screenshot.png"
      }
    ],
    locale: 'en-GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retiishia - Portfolio',
    description: 'Welcome to my Portfolio!',
    creator: '@Retiishia',
    images: ['/screenshot.png'],
  },
  category: 'technology',
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
