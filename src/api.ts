import axios from 'axios';

// API URL
const apiUrl = 'http://gl-apps.unlemcloud.com/api';

// API KEY AND DOMAIN
const appKey = 'applications';
const domain = 'http://localhost:5173/apps';

// Get Applications
export async function getApplications(accessToken) {
  try {
    const headers = {
      'UB-App': 'application',
      'Authorization': `${accessToken}`,
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
