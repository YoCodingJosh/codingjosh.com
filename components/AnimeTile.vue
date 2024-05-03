<template>
  <div class="flex flex-col items-center">
    <img :src="image" :alt="title" class="w-full h-auto" />
    <h2 class="mt-2">{{ title }}</h2>
    <div class="mt-2 flex flex-wrap gap-2">
      <Badge v-for="genre in genres" :key="`${title}--${genre}`">
        {{ genre }}
      </Badge>
    </div>
    <div class="mt-2 flex space-x-2">
      <a v-if="malLink" :href="malLink" target="_blank" rel="noreferrer">
        <img src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="MyAnimeList" class="w-6 h-6" title="Link to MyAnimeList entry" />
      </a>
      <a v-if="aniListLink" :href="aniListLink" target="_blank" rel="noreferrer">
        <img src="https://anilist.co/img/icons/android-chrome-512x512.png" alt="AniList" class="w-6 h-6" title="Link to AniList entry" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Badge } from '@/components/ui/badge';
import { type AnimeTileDetails } from '../types/AnimeTileDetails';

// TODO: implement a simple parallax/tilt effect

const props = defineProps<AnimeTileDetails>();

const title = ref(props.title);
const genres = ref(props.genres);
const image = ref(props.image);
const malLink = ref(props.malLink);
const aniListLink = ref(props.aniListLink);
</script>

<style scoped></style>
