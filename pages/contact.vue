<script lang="ts" setup>
import Spinner from '@/components/Spinner.vue';

const { data: contactStatus } = await useFetch<ContactPageStatusResponse>('/api/contact');
const contactStatusData = contactStatus.value;

</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold">Contact</h2>

    <p>{{ contactStatusData }}</p>
  </div>
</template>

<style>

</style>
