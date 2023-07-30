import axios from "axios";

// Define the API_URL constant based on the environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";

export async function fetchServices() {
  try {
    // Make the API request using the dynamic API_URL
    const response = await axios.get(`${API_URL}/api/services?populate=*`);
    const data = response.data; // Extract the data from the response
    return data;
  } catch (error) {
    // Handle any errors that may occur during the API request
    console.error("Error fetching data:", error);
    throw error;
  }
}