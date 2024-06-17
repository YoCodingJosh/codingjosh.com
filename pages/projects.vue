<template>
  <div>
    <Head>
      <Title>Projects</Title>
    </Head>
    <h1 class="text-3xl pb-8">Projects</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <ProjectCard class="project-card" v-for="project in projectData" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectDetails } from '~/types/ProjectDetails';

const { data: projectData } = await useFetch<ProjectDetails[]>('/api/projects');
</script>

<style scoped>
.project-card {
  min-height: 200px; /* Adjust this value as needed */
}
</style>
