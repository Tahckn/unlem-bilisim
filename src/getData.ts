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


// TODO ask about api fetch

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