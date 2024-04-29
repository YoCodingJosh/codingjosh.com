<template>
  <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold md:text-base pr-4">
        <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
        <h3 class="text-lg font-semibold">CodingJosh</h3>
      </NuxtLink>
      <NuxtLink to="/" class="text-muted-foreground transition-colors hover:text-foreground"
        active-class="text-purple-500">
        Home
      </NuxtLink>
      <NuxtLink to="/about" class="text-muted-foreground transition-colors hover:text-foreground"
        active-class="text-purple-500">
        About
      </NuxtLink>
      <NuxtLink to="/contact" class="text-muted-foreground transition-colors hover:text-foreground"
        active-class="text-purple-500">
        Contact
      </NuxtLink>
    </nav>
    <Sheet class="md:hidden">
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <SheetClose as-child>
            <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold">
              <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
              <h3 class="text-md font-semibold">CodingJosh</h3>
            </NuxtLink>
          </SheetClose>
          <SheetClose as-child>
            <NuxtLink to="/" class="hover:text-foreground" active-class="text-purple-500">
              Home
            </NuxtLink>
          </SheetClose>
          <SheetClose as-child>
            <NuxtLink to="/about" class="text-muted-foreground hover:text-foreground" active-class="text-purple-500">
              About
            </NuxtLink>
          </SheetClose>
          <SheetClose as-child>
            <NuxtLink to="/contact" class="text-muted-foreground hover:text-foreground" active-class="text-purple-500">
              Contact
            </NuxtLink>
          </SheetClose>
          <!-- TODO: put footer links here as well -->
        </nav>
        <p class="text-muted-foreground text-sm font-light mt-4">
          &copy; {{ new Date().getFullYear() }} Josh Kennedy
        </p>
      </SheetContent>
    </Sheet>
    <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base pr-8 md:hidden">
      <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
      <h3 class="text-lg font-semibold">CodingJosh</h3>
    </a>
    <Button variant="outline" size="icon" class="shrink-0 ml-auto" @click="toggleColorMode">
      <Sun v-if="colorMode.value === 'light'" class="h-5 w-5" />
      <Moon v-else class="h-5 w-5" />
      <span class="sr-only">Toggle color mode</span>
    </Button>
  </header>
</template>

<script lang="ts" setup>
import { Menu, Moon, Sun } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
}
</script>

<style></style>
