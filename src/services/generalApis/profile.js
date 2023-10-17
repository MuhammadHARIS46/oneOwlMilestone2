import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const generalApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const putUpdateProfile = (data) => {
        return axiosInstance.put(`${baseUrl}/user`, data);
    }
    const getUserDetail = () =>{
        return axiosInstance.get(`${baseUrl}/user/me`)
    }


    return { putUpdateProfile,getUserDetail }
}