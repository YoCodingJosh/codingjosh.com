<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>{{ props.name }}</CardTitle>
        <CardDescription>{{ props.description }}</CardDescription>
      </CardHeader>
      <CardContent v-if="shouldShowContent">
        <div class="flex space-x-2">
          <Admonition type="warning" v-if="props.unsupported" message="This project is no longer supported." />
          <Admonition type="info" v-if="props.underConstruction" message="This project is still under construction." />
          <Admonition type="info" v-if="props.customInfoString !== undefined" :message="props.customInfoString" />
        </div>
        <div class="mt-2 flex flex-wrap gap-2">
          <Badge v-for="tech in props.tech" :key="tech">
            {{ tech }}
          </Badge>
        </div>
      </CardContent>
      <CardFooter v-if="shouldShowFooter" class="flex justify-between">
        <NuxtLink v-if="props.url !== undefined" :to="props.url" external target="_blank">Project homepage</NuxtLink>
        <NuxtLink v-if="props.repo !== undefined" :to="props.repo" external target="_blank">GitHub repository</NuxtLink>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang='ts'>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';

import Admonition from './Admonition.vue';

import { type ProjectDetails } from '~/types/ProjectDetails';

const props = defineProps<ProjectDetails>();

const shouldShowContent = computed<boolean>(() => props.underConstruction || props.unsupported || props.customInfoString !== undefined || props.tech.length > 0);
const shouldShowFooter = computed<boolean>(() => props.url !== undefined || props.repo !== undefined);
</script>
