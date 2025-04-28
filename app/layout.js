import './assets/styles/document.css'
import { Suspense } from 'react'

export default function RootLayout({ children }) {
  return (
      <html lang="bg">
      <head>
        <title>Народен - приложението на народа!</title>
      </head>
      <body>
        <Suspense>{children}</Suspense>
      </body>
      </html>
  );
}

