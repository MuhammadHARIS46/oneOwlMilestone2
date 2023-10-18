import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const DashboardApi = () =>{
    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getConversationRate = () => {
        return axiosInstance.get(`${baseUrl}/user/conversation-rate`);
    }
    const getAvgResponseTime = () =>{
        return axiosInstance.get(`${baseUrl}/user/average-response-time`)
    }

    return { getConversationRate, getAvgResponseTime }

}