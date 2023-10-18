import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const NotificationApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const ReadMyNotification = (id) => {
        return axiosInstance.put(`${baseUrl}/notification/${id}/me/read-status`);
    }
    return { ReadMyNotification }
}