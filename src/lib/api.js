const BASE_URL = 'http://localhost:8000' // FastAPI 서버 주소

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects`);
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}