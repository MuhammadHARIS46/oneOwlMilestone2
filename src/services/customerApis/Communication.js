import axios from "axios";
import Base from "../base";
import TokenService from "../tokenService";

export const CommunicationApi = () => {
  const { baseUrl } = Base();
  const { token } = TokenService();

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const getUserCompanyAgents = async () => {
    try {
      const response = await axios.get(baseUrl + "/company/myagents", {
        headers,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return { getUserCompanyAgents };
};
