import { ButtonWithLoader, ComicCard, InputWithIcon } from "@/components/ui";
import { comicCategories } from "@/constants/data";
import { MainLayout } from "@/layouts";
import { BookA, CloudUpload, Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  singleComicSchema,
  type SingleComicSchema,
} from "@/schemas/singleComic";
import MultiSelect from "@/components/ui/MultiSelect";
import { useCreateComic } from "@/hooks";

const Single = () => {
  const { createSingleComic, loading, singleComics, singleComicsLoading } =
    useCreateComic();
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isPdf = file.type === "application/pdf";
      if (isPdf) {
        setFile(file);
      } else {
        toast.error("File must be a PDF");
      }
    }
  };

 

  const toMB = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingleComicSchema>({
    resolver: zodResolver(singleComicSchema),
  });

  const onSubmit = (data: SingleComicSchema) => {
    if (!file) {
      toast.error("Please upload a file");
      return;
    }

    if (categories.length === 0) {
      toast.error("Please add at least one category");
      return;
    }

    createSingleComic(data, file, categories);
  };

  return (
    <MainLayout>
      <div className="main my-10 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary">
            Create Single Comic
          </h1>
        </div>



        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="text-sm text-muted font-medium mb-2">PDF File</p>
              <label htmlFor="file">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <div className="center flex-col gap-2 border border-dashed border-line rounded-2xl bg-foreground p-4 min-h-[150px]">
                  <CloudUpload size={24} className="text-muted" />
                  {!file ? (
                    <p className="text-muted text-xs text-center">
                      Click or drag and drop PDF file to this area to upload
                    </p>
                  ) : (
                    <div className="text-center">
                      <p className="text-muted text-sm">{file.name}</p>
                      <p className="text-muted text-sm">{toMB(file.size)} MB</p>
                    </div>
                  )}
                </div>
              </label>
            </div>

            

            <InputWithIcon
              type="text"
              label="Comic Title"
              placeholder="Enter comic title"
              icon={<BookA size={20} />}
              {...register("title")}
              error={errors.title?.message}
            />

            <MultiSelect
              label="Add Categories"
              options={comicCategories}
              selected={categories}
              onChange={setCategories}
            />

            <div className="space-y-1">
              <label
                htmlFor="description"
                className="text-sm text-muted font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="Comic description"
                className="p-4 w-full rounded-lg text-sm border border-line focus:border-primary focus:ring-[3px] focus:ring-primary/20 dark:bg-secondary"
                {...register("description")}
              ></textarea>
              {errors.description && (
                <p className="text-xs font-medium text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <ButtonWithLoader
              loading={loading}
              initialText="Upload"
              loadingText="Uploading..."
              type="submit"
              className="w-full h-11 rounded-full btn-primary"
            />
          </form>
          <div className="border border-line p-4 rounded-2xl">
            <h3 className="text-lg font-semibold">Recent Uploads</h3>

            {singleComics.length === 0 && (
              <div className="h-[200px] center bg-foreground rounded-xl text-muted mt-2">
                <p>No recent uploads</p>
              </div>
            )}

            {singleComicsLoading && (
              <div className="h-[200px] center bg-foreground rounded-xl text-muted mt-2">
                <Loader className="animate-spin" size={24} />
              </div>
            )}

            {singleComics.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {singleComics.slice(0, 4).map((comic) => (
                  <ComicCard key={comic.id} comic={comic} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Single;
