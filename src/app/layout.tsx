import './globals.css'

export const metadata = {
  title: "Retiishia",
  description: 'Welcome to my portfolio!',
  openGraph: {
    title: 'Retiishia',
    description: 'Welcome to my portfolio!',
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
    title: 'Retiishia',
    description: 'Welcome to my portfolio!',
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
