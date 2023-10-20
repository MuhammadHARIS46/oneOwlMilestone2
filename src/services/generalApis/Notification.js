import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const NotificationApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const ReadMyNotification = (id) => {
        return axiosInstance.put(`${baseUrl}/notification/${id}/me/read-status`);
    }
    const ReadAllNotifications = ()=>{
        return axiosInstance.put(`${baseUrl}/notification/me/read-status`)
    }
    const DeleteAllNotifications = () =>{
        return axiosInstance.delete(`${baseUrl}/notification/me?readStatus=true`)
    }
    const DeleteMyNotification = (id)=>{
        return axiosInstance.delete(`${baseUrl}/notification/${id}/me?read-status`);

    }
    return { ReadMyNotification,ReadAllNotifications,DeleteAllNotifications,DeleteMyNotification }
} 