import '@/assets/styles/globals.css';

export const metadata = {
    title: 'naroden.org',
    description: 'Приложението на народа!',
    keywords: 'naroden todo'
}

const MainLayout = ({children}) => {
    return (
        <html>
          <body>
            <div>{children}</div>
          </body>
        </html>
    );
};
export default MainLayout;