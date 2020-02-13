const API_URL = 'https://api.github.com';

export async function request(path) {
  const res = await fetch(`${API_URL}${path}`);
  const json = await res.json();
  return json;
}
