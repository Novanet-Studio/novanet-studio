<script>
export default {
  name: "NuxtTutorial",
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>


<template>
  <footer class="fixed bottom-0 flex justify-between pb-2 md:pb-5 w-full px-9 items-center lg:px-20 lg:pb-20 ">
    <div>
      <p class="h-7 text-s1 md:text-p1 lg:text-p3" :class="config.footerColor">
        <span class="font-bold">Novanet Studio</span> | Creatividad | Innovación | Colaboración
      </p>
    </div>
    <div class=" flex gap-1 h-9 lg:gap-2">
      <NuxtLink><NuxtImg class="size-[0.839rem] lg:size-9 md:size-8" :src="config.iconMap"></NuxtImg></NuxtLink>
      <NuxtLink><NuxtImg class="size-[0.839rem] lg:size-9 md:size-8" :src="config.iconFace"></NuxtImg></NuxtLink>
      <NuxtLink><NuxtImg class="size-[0.839rem] lg:size-9 md:size-8" :src="config.iconWhats"></NuxtImg></NuxtLink>
      <NuxtLink><NuxtImg class="size-[0.839rem] lg:size-9 md:size-8" :src="config.iconInsta"></NuxtImg></NuxtLink>
    </div>
  </footer>
</template>
