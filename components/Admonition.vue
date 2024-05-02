<template>
  <div :class="['admonition', type, 'flex', 'items-center', 'p-3', 'rounded-lg', 'my-2', !sameLine ? 'flex-col' : '']">
    <component :is="icon" class="admonition-icon mr-2" />
    <div>
      <strong class="admonition-title mb-1 pr-2" v-if="title">{{ title }}</strong>
      <span class="admonition-message">{{ message }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { Info, CheckCircle, AlertCircle, XCircle } from 'lucide-vue-next';

type AdminitionType = 'info' | 'success' | 'warning' | 'error';

const props = defineProps({
  type: {
    type: String as () => AdminitionType,
    default: 'info',
  },
  title: String,
  message: String,
  sameLine: {
    type: Boolean,
    default: true,
  }
});

const icon = computed(() => {
  switch (props.type) {
    case 'info':
      return Info;
    case 'success':
      return CheckCircle;
    case 'warning':
      return AlertCircle;
    case 'error':
      return XCircle;
    default:
      return Info;
  }
});
</script>

<style>
.admonition.info {
  background-color: #d0e8ff;
  color: #004085;
}

.admonition.success {
  background-color: #d4edda;
  color: #155724;
}

.admonition.warning {
  background-color: #fff3cd;
  color: #856404;
}

.admonition.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
