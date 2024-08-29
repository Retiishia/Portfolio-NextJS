import './globals.css'

export const metadata = {
  title: 'Retiishia',
    description: 'Welcome to My Portofolio',
    url: 'https://retiishia.my.id',
    siteName: 'Retiishia ',
    images: [
      {
        url: '/screenshot.png'
      },
    ],
    locale: 'en-GB',
    type: 'website',
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
