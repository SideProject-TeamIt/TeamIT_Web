import '../styles/globals.css'

export const metadata = {
  title: 'TeamIT',
  description: 'Team building platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
