<script lang="ts" setup>
import Spinner from '@/components/Spinner.vue';
import VueTurnstile from 'vue-turnstile';

const config = useRuntimeConfig();

const { data: contactStatus } = await useFetch<ContactPageStatus>('/api/contact');

const turnstileToken = useState<string>('turnstileToken', () => '');
</script>

<template>
  <div>
    <Head>
      <Title>Contact</Title>
    </Head>
    <span v-if="!contactStatus?.available">
      <h1 class="text-4xl font-semibold">{{ contactStatus?.message }}</h1>
    </span>
    <span v-else>
      <h2 class="text-2xl font-semibold">Contact</h2>
      <Spinner />
      <vue-turnstile :site-key="config.public.turnstileSiteKey" v-model="turnstileToken" theme="dark" />
    </span>
  </div>
</template>
