<template>
    <div>
      <AppsSecuritySummaryWidget />
      <AppsWishlistWidget />
      <AppsSessionsWidget />
    </div>
  </template>
  
  <script setup lang="ts">
  import AppsSecuritySummaryWidget from '@/components/widgets/AppsSecuritySummaryWidget.vue';
  import AppsWishlistWidget from '@/components/widgets/AppsWishlistWidget.vue';
  import AppsSessionsWidget from '@/components/widgets/AppsSessionsWidget.vue';
  
  </script>