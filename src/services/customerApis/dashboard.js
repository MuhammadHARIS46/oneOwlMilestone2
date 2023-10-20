import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const DashboardApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getConversationRate = () => {
        return axiosInstance.get(`${baseUrl}/user/conversation-rate`);
    }
    const getConversationCount = () => {
        return axiosInstance.get(`${baseUrl}/conversation/count`);
    }
    const getAvgWaitingTime = () => {
        return axiosInstance.get(`${baseUrl}/conversation/average-waitingtime`);
    }

    return { getConversationRate, getConversationCount, getAvgWaitingTime }
}