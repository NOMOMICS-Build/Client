import api from "@/config/api";
import onError from "@/helpers/axiosError";
import type { SingleComicSchema } from "@/schemas/singleComic";
import { useComicsStore } from "@/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const cloud_name = import.meta.env.VITE_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

const useCreateComic = () => {
  const [loading, setLoading] = useState(false);
  const { setSingleComics, singleComics } = useComicsStore();
  const queryClient = useQueryClient();

  const createSingleComic = async (
    data: SingleComicSchema,
    pdf: File,
    categories: string[]
  ) => {
    setLoading(true);
    try {
      // Upload PDF only
      const formDataPdf = new FormData();
      formDataPdf.append("file", pdf);
      formDataPdf.append("upload_preset", upload_preset);

      const uploadPdf = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formDataPdf
      );

      const pdfUrl = uploadPdf.data.secure_url;
      const publicId = uploadPdf.data.public_id;

      // Generate cover image from first page of PDF
      const coverImageUrl = `https://res.cloudinary.com/${cloud_name}/image/upload/pg_1/w_600,f_auto/${publicId}.jpg`;
      console.log(coverImageUrl);

      const comicData = {
        title: data.title,
        description: data.description,
        pdf: pdfUrl,
        coverImage: coverImageUrl,
        categories: categories,
      };

      const response = await api.post("/comics/single/create", comicData);

      if (response.data.success) {
        toast.success("Comic created successfully");
        queryClient.invalidateQueries({ queryKey: ["single-comics"] });
        return response.data;
      } else {
        toast.error("Failed to create comic");
        return null;
      }
    } catch (error) {
      onError(error as Error | AxiosError);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getSingleComics = async () => {
    try {
      const response = await api.get("/comics/single/all");
      if (response.data.success) {
        return response.data.comics;
      } else {
        toast.error("Failed to get comics");
        return null;
      }
    } catch (error) {
      onError(error as Error | AxiosError);
    }
  };

  const {
    data: singleComicsData,
    isLoading: singleComicsLoading,
    isSuccess: singleComicsSuccess,
  } = useQuery({
    queryKey: ["single-comics"],
    queryFn: getSingleComics,
  });

  useEffect(() => {
    if (singleComicsSuccess) {
      setSingleComics(singleComicsData);
    }
  }, [setSingleComics, singleComicsData, singleComicsSuccess]);

  return {
    createSingleComic,
    loading,
    singleComics,
    singleComicsLoading,
  };
};

export default useCreateComic;
