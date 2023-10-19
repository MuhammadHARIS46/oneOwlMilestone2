import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const generalApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const putUpdateProfile = (data) => {
        return axiosInstance.put(`${baseUrl}/user`, data);
    }
    const getUserDetail = () =>{
        return axiosInstance.get('http://54.210.253.228/api/user/me')
    }


    return { putUpdateProfile,getUserDetail }
}