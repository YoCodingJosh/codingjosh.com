<script lang="ts" setup>
import Spinner from '@/components/Spinner.vue';

const { data: contactStatus } = await useFetch<ContactPageStatus>('/api/contact');

const turnstileToken = useState<string>('turnstileToken', () => '');

// fix typescript complaints lmao
interface MyTurnstileOptions {
  theme: 'light' | 'dark' | 'auto' | undefined;
}

let turnstileOptions: MyTurnstileOptions = reactive({
  theme: 'dark', // just default to dark since turnstile doesn't dynamically change theme
});

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
      <NuxtTurnstile v-model="turnstileToken" :options="turnstileOptions" />
    </span>
  </div>
</template>
