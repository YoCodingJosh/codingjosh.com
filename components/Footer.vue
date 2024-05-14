<script lang="ts" setup>
import { useLocationStore } from '@/stores/location';

const locationStore = useLocationStore();
</script>

<template>
  <footer class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="flex flex-col">
      <p>Copyright &copy; {{ new Date().getFullYear() }} Josh Kennedy</p>
      <p class="text-sm font-light text-gray-400">
        <span :title="locationStore.isKansasCity ? 'Howdy neighbor!' : ''">{{locationStore.footerString}}</span>
      </p>
    </div>
    <a href="https://github.com/YoCodingJosh" class="text-blue-500 hover:text-blue-300" target="_blank">
      GitHub
    </a>
  </footer>
</template>
