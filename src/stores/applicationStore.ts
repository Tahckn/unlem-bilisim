import { computed, ref } from 'vue';
import { getAppDetailsById, getApplications } from '@/api';

import { defineStore } from 'pinia';

export const useApplicationsStore = defineStore("application", () =>  {
  const isLoading = ref(false);
  const error = ref(null);
  const applications = ref([]);
  const applicationById = ref({});

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

  async function fetchApplicationById(id: any) {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await getAppDetailsById(id);
      console.log(response);
      applicationById.value = response;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  // Define computed properties
  const hasApplications = computed(() => applications.value.length > 0);

  return {
    isLoading,
    error,
    applications,
    applicationById,
    fetchApplications,
    fetchApplicationById,
    hasApplications, // Add the computed property to the return object
  };
})
