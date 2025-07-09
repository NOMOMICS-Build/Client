    import { Link } from "react-router-dom";
import { ComicCard } from "../ui";
import { ChevronRight } from "lucide-react";

const NewReleases = () => {
  return (
    <div className="main mt-[100px] space-y-[24px]">
      <h2 className="text-2xl font-bold uppercase">New Releases</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
        <ComicCard/>
      </div>

<div className="center">

      <Link to="/" className="min-w-[200px] rounded-lg font-semibold py-4 px-4 mx-auto inline-flex items-center gap-2 justify-center btn-primary">See More <ChevronRight  size={20}/></Link>
</div>
    </div>
  );
};

export default NewReleases;
