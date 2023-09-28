<template>
    <div>
        <AppConnectedAppsWidget v-if="applications" />
    </div>
</template>
  
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useApplicationsStore } from '@/stores/applicationStore';
import AppConnectedAppsWidget from '@/components/widgets/AppConnectedAppsWidget.vue';

const store = useApplicationsStore();
const applications = computed(() => store.applicationById);
const route = useRoute();
onMounted(async () => {
    try {
        const id = route.params.id;
        await store.getApiApplication(id);
        await store.fetchApplications();

    } catch (error) {
        console.error('error while fetching api applications');
    }
});
</script>