import './assets/styles/document.css'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>Nova - Bootstrap 5 Landing Page Template For Mobile Apps</title>
      </head>
      <body>
        {children}
      </body>
      </html>
  );
}

