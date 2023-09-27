import { computed, ref } from 'vue';
import { getAppDetailsById, getApplications, createApplications, editApplication } from '@/api';

import { defineStore } from 'pinia';

export const useApplicationsStore = defineStore("application", () => {
  const isLoading = ref(false);
  const error = ref(null);
  const applications = ref([]);
  const applicationById = ref({});
  const successMessage = ref(false);

  // fetch application list
  async function fetchApplications() {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await getApplications();
      applications.value = response.data;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  //fetch application by id
  async function fetchApplicationById(id: any) {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await getAppDetailsById(id);
      applicationById.value = response;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }


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
  //create application
  async function createApplication(applicationData: ApplicationData) {
    isLoading.value = true;
    error.value = null;
    successMessage.value = false;
    try {
      const response = await createApplications(applicationData);
      console.log(response);
      successMessage.value = true;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  //edit application by id
  async function updateApplication(id, applicationData) {
    isLoading.value = true;
    error.value = null;
    successMessage.value = false;
    try {
      const response = await editApplication(id, applicationData);
      successMessage.value = true;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  // Define computed properties

  return {
    isLoading,
    error,
    applications,
    applicationById,
    fetchApplications,
    fetchApplicationById,
    createApplication,
    updateApplication,
    successMessage
  };
});
