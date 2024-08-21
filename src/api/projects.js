import axios from 'axios';

axios.defaults.baseURL = 'https://createx-api.vercel.app';

export async function getProjects() {
  try {
    const response = await axios.get('/projects');
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export async function currentProject(id) {
  try {
    const response = await axios.get(`/projects/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
