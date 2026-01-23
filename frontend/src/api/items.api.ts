import api from './axios';

export const getItems = async () => {
  const response = await api.get('/items');
  return response.data;
};

export const createItem = async (item: any) => {
  const response = await api.post('/items', item);
  return response.data;
};

export const updateItem = async (id: string, item: any) => {
  const response = await api.put(`/items/${id}`, item);
  return response.data;
};

export const deleteItem = async (id: string) => {
  const response = await api.delete(`/items/${id}`);
  return response.data;
};