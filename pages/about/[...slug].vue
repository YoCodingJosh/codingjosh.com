<template>
  <div>
    <Head>
      <Title>{{ data?.title }}</Title>
    </Head>
    <article class="prose dark:prose-invert">
      <ContentRenderer v-if="data">
        <h1>{{ data.title }}</h1>
        <ContentRendererMarkdown :value="data" />
      </ContentRenderer>
      <p v-else>Page Not Found</p>
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
