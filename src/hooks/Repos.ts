import { useState } from "react";
import { AxiosInstance } from "@/lib/axios";
import type { repos } from "@/types/repos";

const useGetRepos = () => {
  const [repos, SetRepos] = useState<repos[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [errorRepos, setErrorRepos] = useState("");

  const getRepos = async (payload: string) => {
    try {
      setLoadingRepos(true);
      setErrorRepos("");

      const response = await AxiosInstance.get(`/users/${payload}/repos`);

      SetRepos(response.data);
    } catch (error: any) {
      if (error.response?.status === 404) {
        setErrorRepos("User not found");
      }
      if (error.response?.status === 403) {
        setErrorRepos("Rate limit exceeded");
      }
      else setErrorRepos(error.message);
     
    } finally {
      setLoadingRepos(false);
    }
  };

  return {
    repos,
    loadingRepos,
    errorRepos,
    getRepos,
  };
};

export default useGetRepos;
