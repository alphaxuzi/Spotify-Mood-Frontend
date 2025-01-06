const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "/api/api/fruit" 
    : "https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit";

export const fetchFruitData = async (fruitName) => {
  try {
    const response = await fetch(`${BASE_URL}/${fruitName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch fruit data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching fruit data: ${error.message}`);
    return null;
  }
};
