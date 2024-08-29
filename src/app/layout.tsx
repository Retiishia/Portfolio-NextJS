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
        url: "/oglink.png"
      }
    ],
    locale: 'en-GB',
    type: 'website',
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
