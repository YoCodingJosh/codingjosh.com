<template>
  <div>
    <Head>
      <Title>{{ data?.title }}</Title>
    </Head>
    <h1 class="text-3xl pb-8">{{ data?.title }}</h1>
    <article class="prose dark:prose-invert">
      <ContentRenderer v-if="data">
        <ContentRendererMarkdown :value="data" />
      </ContentRenderer>
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
