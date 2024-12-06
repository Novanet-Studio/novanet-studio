<script setup lang="ts">

defineProps<{ content: any }>()

</script>

<template>
  <section v-for="(item, index) in content" :key="index"  class="flex flex-col overflow-hidden w-full h-screen lg:flex-row lg:items-center lg:px-20" :class="item.class">

    <div v-if="item.imageMision" class="lg:flex lg:flex-col lg:justify-center lg:h-full ">
      <NuxtImg :src="item.imageMision" class=" lg:w-[25rem]"/>
    </div>

    <div class="flex flex-col gap-3  lg:pl-0 lg:gap-3  ">
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5">{{ item.titleMision }}</h1>

      <!-- Descripción -->
      <p class="lg:text-p3 md:text-p2" :class="item.descriptionClass">
        {{ item.descriptionMision }}
      </p>
    </div>

    <div v-if="item.imageVision" class="lg:flex lg:flex-col lg:justify-center lg:h-full ">
      <NuxtImg :src="item.imageVision" class="lg:w-[25rem]" />
    </div>

    <div class="flex flex-col gap-3  lg:pl-0 lg:gap-3  ">
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5">{{ item.titleVision }}</h1>

      <!-- Descripción -->
      <p class="lg:text-p3  md:text-p2" :class="item.descriptionClass">
        {{ item.descriptionVision }}
      </p>
    </div>
  </section>
</template>
