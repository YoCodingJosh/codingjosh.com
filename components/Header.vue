<template>
  <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base pr-4">
        <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
        <h3 class="text-lg font-semibold">CodingJosh</h3>
      </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Dashboard
      </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Orders
      </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Products
      </a>
      <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
        Customers
      </a>
      <a href="#" class="text-foreground transition-colors hover:text-foreground">
        Settings
      </a>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <img src="assets/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" class="h-8 w-8" />
            <h3 class="text-md font-semibold">CodingJosh</h3>
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Dashboard
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Orders
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Products
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Customers
          </a>
          <a href="#" class="hover:text-foreground">
            Settings
          </a>
        </nav>
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
import { CircleUser, Menu, Package2, Search, Moon, Sun } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const colorMode = useColorMode();
console.log(colorMode.preference);

function toggleColorMode() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
  // TODO: Save the color mode preference to local storage
}
</script>

<style></style>
