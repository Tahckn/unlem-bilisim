<template>
  <div>
    <AppListWidget v-if="!isLoading" />
  </div>
</template>
  
<script setup lang="ts">
import AppListWidget from '@/components/widgets/AppListWidget.vue';
import { computed, onMounted } from 'vue';
import { useApplicationsStore } from '@/stores/applicationStore';
const store = useApplicationsStore();

const isLoading = computed(() => store.isLoading);

onMounted(async () => {
  await store.fetchApplications();
});


</script>