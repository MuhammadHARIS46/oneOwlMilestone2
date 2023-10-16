import React from 'react'
import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const ServiceApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getUserConversations = () => {
        return axiosInstance.get(`${baseUrl}/user/conversations?channel=all`);
    }
    const getUserConvoSummary = () => {
        return axiosInstance.get(`${baseUrl}/conversation/summary/me`);
    }
  


    return { getUserConvoSummary, getUserConversations }
}