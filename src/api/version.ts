import { API_URL } from '@src/config';

export const getVersion = async () => {
  const response = await fetch(`${API_URL}/version`);
  const data = await response.json();
  return data.version;
};
