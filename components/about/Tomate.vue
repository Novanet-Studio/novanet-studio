<script setup lang="ts">

defineProps<{ content }>()

</script>

<template>
  <section v-for="(item, index) in content" :key="index">

    <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20">
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5">{{ item.tittle }}</h1>
      <!-- Descripción -->
      <p class="text-s3 lg:text-p4 md:text-p2">
        {{ item.description }}
      </p>
    </div>
  </section>
</template>
