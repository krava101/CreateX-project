export async function getServices() {
  try {
    const response = await axios.get('/services');
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
