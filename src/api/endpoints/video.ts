import apiClient from '../services/apiClient';

export const getVideoId = async (id: string) => {
  const response = await apiClient.request('GET', `/video/${id}`);
  if (response.status === 200) {
    const res = response.data ?? [];
    return res
  } else {
    console.log('Error')
  }
};