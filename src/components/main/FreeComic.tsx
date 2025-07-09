import { ComicList } from "../ui";

   

const FreeComic = () => {
  return (
    <div className="main my-[100px] space-y-[24px]">
      <h2 className="text-2xl font-bold uppercase">Free Comic</h2>
      <ComicList/>
    </div>
  );
};

export default FreeComic;
