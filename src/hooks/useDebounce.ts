import { useState } from "react";
import type { gitHubUser } from "../types/github";
import { AxiosInstance } from "@/lib/axios";

const useGetUser = () => {
  const [users, setUsers] = useState<gitHubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const getUser = async (payload: string) => {
    try {
      setLoading(true);
      setError("");

      const response = await AxiosInstance.get(`/users/${payload}`);

      setUsers([response.data]);
    } catch (error : any) {
        //set error
      if (error.response?.status === 404) setError("User not found"); //jika statusnya 404 maka error user not found
      else if (error.response?.status === 403) setError("Rate limit exceeded"); //jika statusnya 403 maka error rate limit
      else setError(error.message); //jika statusnya bukan 404 atau 403 maka error message
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    loading,
    search,
    setSearch,
    error,
    getUser,
  };
};

export default useGetUser;
