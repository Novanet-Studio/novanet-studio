<script setup lang="ts">

const props = defineProps<{ content: any }>()

</script>

<template>
  <section v-for="(item, index) in props.content" :key="index"
    class="flex flex-col overflow-hidden w-full h-screen lg:flex-row lg:items-center " :class="item.class">

    <div class=" flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20 "
      :class="item.containerClass">
      <!-- Título -->
      <div :class="item.divHero">
        <h1 class="text-3 lg:text-6 md:text-5" :class="item.titleClass">{{ item.title }} </h1>

        <!-- Descripción -->
        <p class=" text-s3  lg:text-p4  md:text-p2" :class="item.descriptionClass">
          {{ item.description }}
        </p>
      </div>

      <!-- CTA -->
      <div v-if="item.buttonText">
        <NuxtLink :href="item.buttonLink" :class="item.buttonType"
          class="transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 text-s2 lg:w-80 md:w-56 md:p-[1.2rem] md:text-2 lg:p-6 lg:text-p3 ">
          {{ item.buttonText }}
          <span>🡒</span>
        </NuxtLink>
      </div>

      <div v-if="item.linkText" class=" flex justify-center">
        <NuxtLink :href="item.linkUrl" :class="item.linkClass" class=" text-s2 p-2 lg:text-p2 lg:p-10 text-azure">
          {{ item.linkText }}
        </NuxtLink>
        <NuxtLink :href="item.linkUrl2" :class="item.linkClass" class="text-s2 p-2  lg:text-p2 lg:p-10 text-azure">
          {{ item.linkText2 }}
        </NuxtLink>
        <NuxtLink :href="item.linkUrl3" :class="item.linkClass" class="text-s2 p-2  lg:text-p2 lg:p-10 text-azure">
          {{ item.linkText3 }}
        </NuxtLink>
      </div>

    </div>


    <!-- Imagen -->
    <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
      <NuxtImg :src="item.image" class="flex align mx-auto w-[30rem] lg:w-[60rem] md:w-[43rem]" />
    </div>
  </section>

</template>
