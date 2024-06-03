import Footer from "@/components/ui/footer";

export const metadata = {
  title: 'Народен - регистрация',
  description: 'Народен - регистрация',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
      <>
        <main className="grow">

          {children}

        </main>

        <Footer />
      </>
  )
}
