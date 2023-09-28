import { addConnect, createApplications, deleteConnect, editApplication, getApiApplications, getAppDetailsById, getApplications, removeApplication, } from '@/api';

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useApplicationsStore = defineStore("application", () => {
  const isLoading = ref(false);
  const error = ref(null);
  const applications = ref([]);
  const apiApplications = ref([]);
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
      console.log(applicationById);
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }


  //delete application by id
  async function deleteApplication(id: any) {
    isLoading.value = true;
    error.value = null;
    successMessage.value = false;
    try {
      const response = await removeApplication(id);
      successMessage.value = true;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  //delete connection
  async function deleteConnection(id: any) {
    isLoading.value = true;
    error.value = null;
    successMessage.value = false;
    try {
      const response = await deleteConnect(id);
      successMessage.value = true;
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
  //get api application by id
  async function getApiApplication(id: any) {
    isLoading.value = true;
    error.value = null;
    successMessage.value = false;
    try {
      const response = await getApiApplications(id);
      apiApplications.value = response.data;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  //get api application by id
  async function addConnection(data) {
    isLoading.value = true;
    error.value = null;
    successMessage.value = false;
    try {
      const response = await addConnect(data);
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
    getApiApplication,
    createApplication,
    updateApplication,
    addConnection,
    successMessage,
    deleteConnection,
    apiApplications,
    deleteApplication
  };
});
