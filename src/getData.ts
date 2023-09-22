export async function fetchData(): Promise<any> {
  try {
    const response = await fetch("http://gl-apps.unlemcloud.com/api/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
