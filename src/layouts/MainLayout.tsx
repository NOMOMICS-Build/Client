import { Footer, Header } from "@/components/main"

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout