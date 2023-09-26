<template>
    <div class="flex flex-col gap-y-[10px]">
      <AppsSecuritySummaryWidget />
      <AppsWishlistWidget />
      <AppsSessionsWidget />
    </div>
  </template>
  
  <script setup lang="ts">
  import AppsSecuritySummaryWidget from '@/components/widgets/AppsSecuritySummaryWidget.vue';
  import AppsWishlistWidget from '@/components/widgets/AppsWishlistWidget.vue';
  import AppsSessionsWidget from '@/components/widgets/AppsSessionsWidget.vue';

  //fetch getappsbyid and push them as props inside them
  
  </script>