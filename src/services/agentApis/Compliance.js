import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const ComplianceApi = () =>{
    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getConversationAnalytics = () => {
        return axiosInstance.get(`${baseUrl}/conversation/analytics`);
    }
    const getUserAgentConvo = () =>{
        return axiosInstance.get(`${baseUrl}/conversation/customer`)
    }

    return { getConversationAnalytics, getUserAgentConvo }

}