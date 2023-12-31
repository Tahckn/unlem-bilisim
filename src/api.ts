import axios from 'axios';
import { useRouter } from 'vue-router';

// API URLs and Keys
const apiUrl = 'http://gl-apps.unlemcloud.com/api';
const logUrl = 'http://auth.unlemcloud.com/api/auth/login';
const appDetailUrl = 'http://gl-apps.unlemcloud.com/api/applications/show/';
const appKey = 'applications'; // Update with your actual app key
const domain = 'http://localhost:5173/apps';

// Credentials
const email = 'orhan.basli@unlembilisim.com';
const password = 'Orge1234*';

// Store the token in localStorage
function setAuthToken(token: any) {
  localStorage.setItem('token', token);
}

// Retrieve the token from localStorage 
export function getAuthToken() {
  return localStorage.getItem('token');
}

// fetch token
async function login() {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const headers = {
      'UB-App': 'applications',
    };

    const response = await axios.post(logUrl, loginData, { headers });

    if (response.status === 200) {
      const token = response.data.extra.token;
      setAuthToken(token);

      return token;
    } else {
      console.error('Login API error:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('Login request error:', error);
    throw error;
  }
}

// fetch application lista
export async function getApplications() {
  let response; // Define the response variable outside the try-catch block
  let router = useRouter();
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    // Check if token expired
    try {
      response = await axios.get(`${apiUrl}/applications?limit=25`, {
        params: {
          app_key: appKey,
          domain: domain,
        },
        headers: headers,
      });
    } catch (error) {
      if (error.response.status === 401) {
        router.push('/login');
        return;
      }
    }

    if (response.data.error === 0) {
      const applications = response.data.extra;
      return applications;
    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}


// Get App Detils
export async function getAppDetailsById(id: any) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const appDetailUrlWithId = `${appDetailUrl}${id}`;

    const response = await axios.get(appDetailUrlWithId, {
      headers: headers,
    });

    if (response.data.error === 0) {
      const appDetails = response.data.extra;
      return appDetails;
    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}
// Get Api applications
export async function getApiApplications(id: any) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const apiURL = `${apiUrl}/applications/options/${id}`;

    const response = await axios.get(apiURL, {
      headers: headers,
    });

    if (response.data.error === 0) {
      const appDetails = response.data.extra;
      return appDetails;
    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}


// App interface 
interface ApplicationData {
  app_key: string;
  name: string;
  domain: string;
  icon?: string; // Optional property
  status: boolean;
  private: boolean;
  healthCheck: boolean;
  healthCheckLink: string;
  healthCheckPeriod: number;
}

// Create Application
export async function createApplications(applicationData: ApplicationData) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const response = await axios.put(`${apiUrl}/applications/add`, applicationData, {
      headers: headers
    });

    if (response.data.error !== 0) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error;
  }
}

//edit Application
export async function editApplication(id: string, applicationData: ApplicationData) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const editUrl = `${apiUrl}/applications/edit/${id}`; // Replace with your actual edit endpoint URL

    const response = await axios.post(editUrl, applicationData, {
      headers: headers,
    });

    if (response.data.error === 0) {
      const editedApplication = response.data.extra;
      return editedApplication;
    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}

//add connection
export async function addConnect(connectionData) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const addConnectionUrl = `${apiUrl}/connection/add`;

    const response = await axios.put(addConnectionUrl, connectionData, {
      headers: headers,
    });

    if (response.data.error === 0) {
      const addedConnection = response.data.extra;
      return addedConnection;
    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}
//delete connection
export async function deleteConnect(id: any) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const deleteConnectionUrl = `${apiUrl}/connection/delete/${id}`;

    const response = await axios.delete(deleteConnectionUrl, {
      headers: headers,
    });

    if (response.data.error === 0) {
      return "Connection deleted successfully";

    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}

// Delete Application
export async function removeApplication(id: any) {
  try {
    let token = getAuthToken();

    if (!token) {
      token = await login();
    }

    const headers = {
      'UB-App': 'applications',
      'Authorization': `Bearer ${token}`,
    };

    const deleteUrl = `${apiUrl}/applications/delete/${id}`; // Replace with your actual delete endpoint URL

    const response = await axios.delete(deleteUrl, {
      headers: headers,
    });


    if (response.data.error === 0) {
      return "Application deleted successfully";

    } else {
      console.error('API hatası:', response.data.errorMessage);
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
    throw error;
  }
}