import { ComicCard } from ".";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";


const ComicList = () => {
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-[480px]:grid-cols-1 gap-4 mt-10">
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </div>

      <div className="center">
        <Link
          to="/"
          className="min-w-[200px] rounded-lg font-semibold py-4 px-4 mx-auto inline-flex items-center gap-2 justify-center btn-primary"
        >
          See More <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ComicList;
