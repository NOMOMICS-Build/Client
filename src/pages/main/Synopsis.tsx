import { EpisodeCard } from "@/components/main";
import { MainLayout } from "@/layouts";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  ChevronRight,
  Eye,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Synopsis = () => {
  return (
    <MainLayout>
      <div>
        <div className="h-[370px] w-full overflow-hidden">
          <img src="/hero.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="main grid md:grid-cols-3 grid-cols-1 rounded-t-xl overflow-hidden -translate-y-10 shadow-xl min-h-[500px]">
          <div className="col-span-2 bg-[#fae8e6] p-10 space-y-10 flex flex-col">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-4xl font-bold">Spider Man</h3>
              <p className="text-sm md:text-lg text-muted">Episode 1</p>
            </div>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium doloribus ducimus consectetur quia illum, aliquam
              ipsam, consequuntur dolore nam minima perspiciatis eum delectus
              ipsa ad quaerat quas maxime reprehenderit iste.
            </p>
            <div className="space-y-10 ms-0 mt-auto">
              <div className="center">
                <Link to="/">
                  <button className="bg-secondary text-white px-4 py-2 rounded-md">
                    Episode 1
                    <ChevronRight size={20} />
                  </button>
                </Link>
              </div>

              <div className="center gap-4">
                <button>
                  <Eye size={20} />
                  <span>100</span>
                </button>
                <button>
                  <ThumbsUp size={20} />
                  <span>100</span>
                </button>
                <button>
                  <ThumbsDown size={20} />
                  <span>100</span>
                </button>
                <button>
                  <Bookmark size={20} />
                </button>
                <button>
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-white p-10 h-full flex flex-col">
            <EpisodeCard />
            <EpisodeCard />

            <div className="center gap-4 md:mt-auto mt-6">
              <button className="h-10 w-10 center bg-secondary text-white rounded-full">
                <ArrowLeft size={20} />
              </button>
              <div className="center gap-2">
                <div className="border border-secondary text-secondary h-10 w-10 rounded-full center">1</div>
                <div className="border border-secondary text-secondary h-10 w-10 rounded-full center">2</div>
              </div>
              <button className="h-10 w-10 center bg-secondary text-white rounded-full">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Synopsis;
