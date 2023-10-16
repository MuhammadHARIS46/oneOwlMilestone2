import AxiosSettings from "../axiosSettings";
import Base from "../base";

export const UserApi = () => {
  const { baseUrl } = Base();
  const { axiosInstance } = AxiosSettings();

  const getAllUsers = () => {
    return axiosInstance.get(`${baseUrl}/user`);
  };

  return { getAllUsers };
};
