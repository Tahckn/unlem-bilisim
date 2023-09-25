import axios from 'axios';

// API URLs and Keys
const apiUrl = 'http://gl-apps.unlemcloud.com/api';
const logUrl = 'http://auth.unlemcloud.com/api/auth/login';
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

export async function login() {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const headers = {
      'UB-App': 'application',
    };

    const response = await axios.post(logUrl, loginData, { headers });

    if (response.status === 200) {
      const token = response.data.extra.token;
      setAuthToken(token);

      console.log('Token:', token);
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

export async function getApplications() {
  try {
    const token = getAuthToken();

    if (!token) {
      throw new Error('No token available. Please login first.');
    }
    
    const headers = {
      'UB-App': 'application',
      'Authorization': `${token}`,
    };

    const response = await axios.get(`${apiUrl}/applications`, {
      params: {
        app_key: appKey,
        domain: domain,
      },
      headers: headers,
    });

    if (response.data.error === 0) {
      const applications = response.data.extra.data;
      console.log('Uygulamalar:', applications);
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
export async function createApplication(applicationData: ApplicationData) {
  try {
    const response = await axios.put(`${apiUrl}/applications/add`, applicationData);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error;
  }
}
