import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const PreferenceApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getUserNotification = () => {
        return axiosInstance.get(`${baseUrl}/user/notification`);
    }
    const getUserActivities = () => {
        return axiosInstance.get(`${baseUrl}/user/activities`);
    }
    const getUserConversations = () => {
        return axiosInstance.get(`${baseUrl}/user/conversations?channel=all`);
    }
    const getUserContacts = () => {
        return axiosInstance.get(`${baseUrl}/user/contacts`);
    }


    return { getUserNotification, getUserConversations, getUserActivities, getUserContacts }
}