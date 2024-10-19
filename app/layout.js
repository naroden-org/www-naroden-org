import './assets/styles/theme.css'
import './assets/plugins/flickity/flickity.min.css'
import './assets/styles/fonts.css'
import './assets/styles/landing.css'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>Nova - Bootstrap 5 Landing Page Template For Mobile Apps</title>
	    <script defer src="assets/fontawesome/js/all.min.js"></script>
      </head>
      <body>
        {children}
      </body>

      <script type="text/javascript" src="assets/plugins/popper.min.js"></script>
      <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="assets/plugins/flickity/flickity.pkgd.min.js"></script>
      <script type="text/javascript" src="assets/js/main.js"></script>
       </html>
  );
}

