import './assets/styles/document.css'

export default function RootLayout({ children }) {
  return (
      <html lang="bg">
      <head>
        <title>Народен - приложението на народа!</title>
      </head>
      <body>
        {children}
      </body>
      </html>
  );
}

