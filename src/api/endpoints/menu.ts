import apiClient from '../services/apiClient';

export const getMenus = async () => {
  const response = await apiClient.request('GET', '/config/menu');
  if (response.status === 200) {
    const res = response.data ?? [];
    return res
  } else {
    console.log('Error')
  }
};