import { axiosInstance } from "./axios";

export const mailAPI = {
  send: async (maildata) => {
    try {
      const { data } = await axiosInstance.post("/api/v1/mail/send", maildata);
      return data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to send Mail" };
    }
  },
};
