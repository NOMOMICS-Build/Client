import { MainLayout } from "@/layouts"
import { Hero, NewReleases } from "@/components/main"

const Home = () => {
  return (
    <MainLayout>
        <Hero/>
        <NewReleases/>
    </MainLayout>
  )
}

export default Home