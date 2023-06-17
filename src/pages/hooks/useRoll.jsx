import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRoll = () => {
  const { user } = useContext(AuthContext)

  const axiosSecure = useAxiosSecure()

  const {
    data: role = "",
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      console.log(res);
      return res.data.role;
    },
  });

  return {
    role,
    isLoading,
    isError,
  };
};

export default useRoll;