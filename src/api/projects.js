const baseURL = 'https://createx-api.vercel.app';

export async function getProjects() {
  try {
    const response = await fetch(`${baseURL}/projects`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function currentProject(id) {
  try {
    const response = await fetch(`${baseURL}/projects/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
