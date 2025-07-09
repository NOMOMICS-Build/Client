import { ComicList } from "../ui";

   

const MostViewed = () => {
  return (
    <div className="main my-[100px] space-y-[24px]">
      <h2 className="text-2xl font-bold uppercase">Most Viewed</h2>
      <ComicList/>
    </div>
  );
};

export default MostViewed;
