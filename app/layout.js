import './assets/styles/theme.css'
import './assets/styles/fonts.css'
import './assets/styles/landing.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>Nova - Bootstrap 5 Landing Page Template For Mobile Apps</title>
      </head>
      <body>
        {children}

       <script type="text/javascript" src="assets/plugins/popper.min.js"></script>
       <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
      </body>
      </html>
  );
}

