<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <Header />
    <main class="flex-grow gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
