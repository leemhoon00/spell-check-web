import { API_URL } from '@src/config';

export async function getMatchByFullname(fullname: string) {
  const encodedFullname = encodeURIComponent(fullname);
  const response = await fetch(`${API_URL}/match?fullname=${encodedFullname}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}
