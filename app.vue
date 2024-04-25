<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <Header />
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <h1>Hello world!</h1>
    </main>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs">
        <span class="bg-background px-2 text-muted-foreground">
          Copyright &copy; {{ new Date().getFullYear() }} CodingJosh
        </span>
      </div>
    </div>
  </div>
</template>
