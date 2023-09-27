<template>
  <div class="flex flex-col gap-y-[10px]" v-if="!isLoading">
    <AppsSecuritySummaryWidget  />
    <AppsWishlistWidget  />
    <AppsSessionsWidget  />
  </div>
</template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import AppsSecuritySummaryWidget from '@/components/widgets/AppsSecuritySummaryWidget.vue';
import AppsWishlistWidget from '@/components/widgets/AppsWishlistWidget.vue';
import AppsSessionsWidget from '@/components/widgets/AppsSessionsWidget.vue';
import { useApplicationsStore } from '@/stores/applicationStore';


const route = useRoute();
const store = useApplicationsStore();
const id = route.params.id;

const isLoading = computed(() => store.isLoading);

onMounted(async () => {
  await store.fetchApplicationById(id);
});

</script>