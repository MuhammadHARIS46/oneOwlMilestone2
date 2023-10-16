import React from 'react'
import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const generalApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const putUpdateProfile = (data) => {
        return axiosInstance.put(`${baseUrl}/user`, data);
    }
  


    return { putUpdateProfile }
}