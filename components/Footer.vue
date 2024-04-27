<script lang="ts" setup>
const { data: colo } = await useFetch<string>('/api/colo-info');

const isKansasCity = computed(() => colo.value === 'MCI');

</script>

<template>
  <footer class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="flex flex-col">
      <p>Copyright &copy; {{ new Date().getFullYear() }} CodingJosh</p>
      <p class="text-sm font-light text-gray-400">
        <span v-if="isKansasCity">Made in and served fresh from Kansas City</span>
        <span v-else>Made in Kansas City, served fresh from {{ colo }}</span>
      </p>
    </div>
    <a href="https://github.com/YoCodingJosh" class="text-blue-500 hover:text-blue-300" target="_blank">
      GitHub
    </a>
  </footer>
</template>
