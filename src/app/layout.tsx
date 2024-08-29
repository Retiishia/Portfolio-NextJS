import { url } from 'inspector'
import './globals.css'

export const metadata = {
  title: "Retiishia",
    description: 'Welcome to my portfolio!',
    siteName: 'retiishia.my.id',
    url: 'https://retiishia.my.id',
    images: [
      {
        url: "/screenshot.png"
      }
    ],
    locale: 'en-GB',
    type: 'website',
  }


// export const metadata = {
//   title: 'Retiishia',
//     description: 'Welcome to My Portofolio',
//     url: 'https://retiishia.my.id',
//     siteName: 'retiishia.my.id ',
//     images: [
//       {
//         url: '/screenshot.png'
//       },
//     ],
//     locale: 'en-GB',
//     type: 'website',
//   }

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
