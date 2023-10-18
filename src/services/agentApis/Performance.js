import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const PerformanceApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getReview = () => {
        return axiosInstance.get(`${baseUrl}/review/me`);
    }

    return { getReview }
}