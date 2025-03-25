import axios from './axios';

export async function getTeamList() {
  const res = await axios.get('/teams'); // FastAPI의 GET /teams
  return res.data;
}
