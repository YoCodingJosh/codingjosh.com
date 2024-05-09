<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>{{ props.name }}</CardTitle>
        <CardDescription>{{ props.description }}</CardDescription>
      </CardHeader>
      <CardFooter>
        TODO: project link and github link
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang='ts'>
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { type ProjectDetails } from '~/types/ProjectDetails';

const props = defineProps<ProjectDetails>();
</script>
