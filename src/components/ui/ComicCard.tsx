import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComicCard = ({ comic }: { comic: SingleComicType }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/preview/${comic.id}`);
  };
  if (!comic) return null;
  return (
    <>
      <div className="relative md:min-h-[350px] min-h-[200px] w-full" onClick={handleNavigate}>
        <img
          src={comic.coverImage}
          alt={comic.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90 z-20" />
        <div className="absolute bottom-2 left-0 z-30 space-y-2 w-full px-2">
          <div>
            <p className="text-white text-sm">{comic.title}</p>
            <p className="text-xs text-white">{comic.creator.name}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white flex items-center gap-1">
              Ratings <Star size={12} className="text-primary" /> {comic.averageRating}
            </p>
            <p className="text-xs text-white">
              {comic.comments.length} Comments
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicCard;
