import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/index";
import { setLocalStorageToken } from "../utils/localStorageToken";
import { useNavigate } from "react-router-dom";

function login(loginData: LoginData) {
  // username, password
  // {token: string}
  return axiosInstance.post<LoginResponse>("/login", loginData);
}

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      setLocalStorageToken(data.data.token);
      // "Bearer"
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.data.token}`;
      navigate("/");
    },
  });
};
export default useLogin;
