import { AxiosError } from "axios";
import { toast } from "sonner";

const onError = (error: Error | AxiosError) => {
  console.error(error);
  if (error instanceof AxiosError) {
    toast.error(error.response?.data.message || "An error occurred");
  } else {
    toast.error(error.message || "An error occurred");
  }
};

export default onError;
