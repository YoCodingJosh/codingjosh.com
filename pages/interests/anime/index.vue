<template>
  <div>
    <Head>
      <Title>Anime</Title>
    </Head>
    <h1 class="text-4xl font-semibold text-center pb-4">Anime</h1>
    <p class="text-center pb-4">I'm a big fan of anime, and I've watched a lot of series over the years. Here are some of my favorites!</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <AnimeTile v-for="anime in animeData" :key="anime.title" v-bind="anime" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AnimeTileDetails } from '~/types/AnimeTileDetails';

const { data: animeData } = await useFetch<AnimeTileDetails[]>('/api/anime');
</script>

<style></style>
