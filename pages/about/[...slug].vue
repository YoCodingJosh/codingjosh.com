<template>
  <div>
    <Head>
      <Title>{{ data?.title }}</Title>
    </Head>
    <article class="prose dark:prose-invert">
      <h1>{{ data?.title }}</h1>
      <ContentRenderer :value="data" />
    </article>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data } = await useAsyncData(`about-${route.params.slug}`, () => queryContent(`/about/${route.params.slug}`).findOne());

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  });
}
</script>
