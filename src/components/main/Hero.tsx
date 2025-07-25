import { Bookmark, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="relative min-h-[500px] md:min-h-[calc(100vh-95px)] py-10 flex items-center">
        <img src="/hero.svg" alt="hero" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <div className="relative z-20 main left-0">
            <div className=" md:w-1/2 space-y-[33px]">
                <h2 className="text-white text-4xl md:text-[69px] font-comic">Spider Man 3</h2>
                <div className="flex items-center gap-2">
                    <div className="border border-primary bg-primary/20 text-primary px-4 py-2 rounded-md">Horror</div>
                    <div className="border border-primary bg-primary/20 text-primary px-4 py-2 rounded-md">Mystery</div>
                </div>
                <p className="text-white text-lg md:text-2xl">
                Dozie, son of the legendary Amadioha, is ensnared in a web of mystery. A series of unexplained murders shadow his rise to success, turning his world into a thrilling puzzle. Amidst the darkness of commerce, he must solve the enigma that endangers all he cherishes.
                </p>

                <div className="flex items-center gap-4">
                    <Link to="/synopsis/1" className="btn btn-primary font-semibold h-12 px-4 rounded-lg flex items-center gap-2">Read me <ChevronRight size={20}/></Link>
                    <Link to="/" className="btn bg-white text-main font-semibold h-12 px-4 rounded-lg flex items-center gap-2"><Bookmark size={20}/> Save me</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero