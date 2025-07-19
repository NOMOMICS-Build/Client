import { MainLayout } from "@/layouts"
import { PDFViewer } from "@/components/ui"
import { useParams } from "react-router-dom"
import { useComicsStore } from "@/store";
const Preview = () => {
    const {id} = useParams();
    const {singleComics} = useComicsStore();
    const comic = singleComics.find((comic) => comic.id === id);
    console.log(comic);
    if(!comic) return <div>Comic not found</div>;
  return (
    <MainLayout>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-1"></div>
            <div className="col-span-2">
                    <PDFViewer fileUrl={comic.pdf} />
            </div>
        </div>
    </MainLayout>
  )
}

export default Preview