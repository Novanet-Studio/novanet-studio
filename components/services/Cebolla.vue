<template>
  <section 
    v-for="(item, index) in content" 
    :key="index"
    class="flex flex-col overflow-hidden w-full h-screen lg:flex-row lg:items-center" 
    :class="item.class"
  >
    <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-center lg:h-full lg:w-2/4">
      <NuxtImg :src="item.image" class="flex align mx-auto w-[30rem] lg:w-[37.688rem] md:w-[43rem]" />
    </div>

    <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20" :class="item.containerClass">
      <!-- Título -->
      <h1 class="text-3 lg:text-6 md:text-5" :class="item.titleClass">{{ item.title }} </h1>

      <!-- Descripción -->
      <p class="text-s3 lg:text-p4 md:text-p2" :class="item.descriptionClass">
        {{ item.description }}
      </p>

      <!-- Sección de pestañas -->

    <!-- Renderizar las pestañas -->
    <div class="flex gap-8">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center py-2 border-b-2 text-p3"
        :class="{
          'border-azure text-azure font-bold tex-p3': selected === index,
          'border-transparent text-azure text-p3 ': selected !== index,
        }"
        @click="selected = index"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- Mostrar contenido de la pestaña activa -->
    <div class="text-p3 w-[62%]">
      <p><span class="font-bold">{{ items[selected].spanText }}</span> {{ items[selected].description }}</p>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ content: any }>()

const items = [
  {
    label: 'Identidad visual',
    description: 'holiss',
    spanText: 'Diseño de sitios web y redes sociales:',
  },
  {
    label: 'Impresos y digital',
    description: 'holiis',
    spanText: 'Material promocional y corporativo:',
  },
  {
    label: 'Diseño web y rrss',
    description: 'Proponemos diseños visualmente atractivos y funcionales que mejoran tu presencia en línea. Nos aseguramos de que tu sitio web y perfiles sociales reflejen tu marca, atraigan a tu audiencia y ofrezcan una experiencia de usuario óptima, impulsando el crecimiento y la interacción digital.',
    spanText: 'Diseño de sitios web y redes sociales:',
  },
];

const route = useRoute()
const router = useRouter()


const selected = computed({
  get() {
    const index = items.findIndex(item => item.label === route.query.tab)
    if (index === -1) {
      return 0
    }

    return index
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({ query: { tab: items[value].label }, hash: '#control-the-selected-index' })
  }
})

</script>
