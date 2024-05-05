<template>
  <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold md:text-base pr-4">
        <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
        <h3 class="text-lg font-semibold">CodingJosh</h3>
      </NuxtLink>
      <NuxtLink v-for="link in links" :key="link.text" :to="link.to" :class="{ 'text-purple-500': isLinkActive(link) }"
        class="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
        exact-active-class="text-purple-500">
        <span v-if="link.content" class="relative">
          <DropdownMenu>
            <DropdownMenuTrigger class="header-dropdown-target" as-child>
              <span class="flex items-center">
                {{ link.text }}
                <ChevronDown class="h-5 w-5" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem v-for="subLink in link.content" as-child :key="subLink.text">
                <NuxtLink :to="subLink.to" class="text-muted-foreground transition-colors hover:text-foreground"
                  active-class="text-purple-500">
                  {{ subLink.text }}
                </NuxtLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        <span v-else>
          {{ link.text }}
        </span>
      </NuxtLink>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="md:hidden">
        <nav class="grid gap-6 text-lg font-medium">
          <SheetClose as-child>
            <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold">
              <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
              <h3 class="text-md font-semibold">CodingJosh</h3>
            </NuxtLink>
          </SheetClose>
          <template v-for="link in links" :key="'responsive-' + link.text">
            <SheetClose as-child v-if="!link.content">
              <NuxtLink :to="link.to" class="text-muted-foreground transition-colors hover:text-foreground"
                active-class="text-purple-500">
                {{ link.text }}
              </NuxtLink>
            </SheetClose>
            <div v-else @click="toggle(link.text)" class="cursor-pointer">
              <div class="text-muted-foreground flex items-center" :class="{ 'text-purple-500': isLinkActive(link) }">{{ link.text }}
                <ChevronDown class="h-4 w-4 ml-2" />
              </div>
              <transition name="fade">
                <ul v-if="opened === link.text">
                  <li v-for="subLink in link.content" :key="subLink.text" class="pl-4 mt-3">
                    <SheetClose as-child>
                      <NuxtLink :to="subLink.to" class="text-muted-foreground transition-colors hover:text-foreground"
                        active-class="text-purple-500">
                        {{ subLink.text }}
                      </NuxtLink>
                    </SheetClose>
                  </li>
                </ul>
              </transition>
            </div>
          </template>
          <!-- TODO: put footer links here as well -->
        </nav>
        <SheetFooter>
          <p class="text-muted-foreground text-sm font-light mt-4">
            &copy; {{ new Date().getFullYear() }} Josh Kennedy
          </p>
        </SheetFooter>
        <SheetClose class="hidden">
          <button ref="hiddenCloseForResponsiveRotateRef"></button>
        </SheetClose>
      </SheetContent>
    </Sheet>
    <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold md:text-base md:hidden ml-auto mr-auto">
      <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
      <h3 class="text-lg font-semibold">CodingJosh</h3>
    </NuxtLink>
    <Button variant="outline" size="icon" class="shrink-0 md:ml-auto" @click="toggleColorMode">
      <Sun v-if="colorMode.value === 'light'" class="h-5 w-5" />
      <Moon v-else class="h-5 w-5" />
      <span class="sr-only">Toggle color mode</span>
    </Button>
  </header>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

import { Menu, Moon, Sun, ChevronDown } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const route = useRoute();

function isLinkActive(link: HeaderLink) {
  if (link.to && route.path === link.to) {
    return true;
  }
  if (link.content) {
    return link.content.some(subLink => route.path === subLink.to);
  }
  return false;
}

let opened = ref<string | null>(null);

function toggle(linkText: string) {
  opened.value = opened.value === linkText ? null : linkText;
}

const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
}

const links: HeaderLink[] = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/projects', text: 'Projects' },
  {
    text: 'Hobbies', content: [
      { to: '/interests/anime', text: 'Anime' },
      { to: '/interests/games', text: 'Games' },
      { to: '/interests/music', text: 'Music' },
    ]
  },
  // { to: '/blog', text: 'Blog' },
  { to: '/contact', text: 'Contact' },
];

// this is a hack to close the responsive menu when the window is resized to a larger size (ie rotating a phone)

let resizeHandler: () => void;

const hiddenCloseForResponsiveRotateRef = ref<HTMLElement | null>(null);

onMounted(() => {
  resizeHandler = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      hiddenCloseForResponsiveRotateRef.value?.click();
    }
  };

  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<style scoped>
.header-dropdown-target[data-state="open"],
.header-dropdown-target[data-state="closed"] {
  display: flex;
  align-items: center;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
