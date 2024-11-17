import axiosInstance from './axiosInstance';

const GenerateService = {
  getPds: async () => {
    const response = await axiosInstance.get('/pdf');
    return response.data;
  }
}

export default GenerateService;