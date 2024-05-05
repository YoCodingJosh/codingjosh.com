<template>
  <div>
    <Head>
      <Title>About</Title>
    </Head>
    <ContentRenderer class="prose dark:prose-invert" :value="data" />
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('about', () => queryContent('/about').findOne());
</script>
