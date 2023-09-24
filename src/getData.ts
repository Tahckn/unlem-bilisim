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


// // TODO ask about api fetch

// const appKey: string = "your_app_key"; // Uygulama Kodu (app_key)
// const domain: string = "your_domain"; // Alan Adı (domain)


// // JWT Generation
// function generateJWT(appKey: string, domain: string): string {
//   // example:

//   const token: string = "your_generated_token";
//   return token;
// }

// // API fetch
// fetch("http://gl-apps.unlemcloud.com/api/", {
//   headers: {
//     Authorization: `Bearer ${generateJWT(appKey, domain)}`,
//   },
// })
//   .then((response: Response) => {
//     // API yanıtını işleme devam edin
//   })
//   .catch((error: Error) => {
//     console.error("API isteği hata:", error);
//   });


import axios from 'axios';

// Replace these with your actual values
const app_key = 'your_unique_app_key';
const domain = 'your_unique_domain';

// Define the API URL
const api_url = 'http://gl-apps.unlemcloud.com/api/applications';

// Create headers with the required authentication parameters
const headers = {
  app_key,
  domain,
};

// Function to fetch data from the API
async function fetchData2(): Promise<void> {
  try {
    const response = await axios.get(api_url, { headers });

    if (response.status === 200) {
      const data = response.data;
      // Now 'data' contains the API response data, and you can process it as needed
      console.log(data);
    } else {
      // Handle errors here, e.g., log an error message or throw an exception
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error: any) {
    // Handle network errors or other exceptions
    console.error(`Error: ${error.message}`);
  }
}

// Call the function to fetch data
fetchData2();