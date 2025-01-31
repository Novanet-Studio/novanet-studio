<script setup lang="ts">

const { $clog } = useNuxtApp()
const props = defineProps<{ content: any }>()

// Método para manejar el cambio de pestaña
// function setActiveTab(sectionIndex: number, tabIndex: number) {
//   content[sectionIndex].activeTab = tabIndex;
// }
</script>


<template>
  <section v-for="(item, index) in props.content" :key="index"
    class="flex flex-col overflow-hidden w-full h-screen lg:flex-row lg:items-center" :class="item.class">
    <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-center lg:h-full lg:w-2/4">
      <NuxtImg :src="item.image" class="flex align mx-auto w-[30rem] lg:w-[37.688rem] md:w-[43rem]" />
    </div>

    <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20" :class="item.containerClass">
      <!-- Título -->
      <h1 class="text-p2 lg:text-6 md:text-5" :class="item.titleClass">{{ item.title }} </h1>
      <div>{{ $clog(props.content) }}</div>
      <!-- Descripción -->
      <p class="text-s3 lg:text-p4 md:text-p2" :class="item.descriptionClass">
        {{ item.description }}
      </p>

      <UTabs :items="item.tabs" :ui="{
        wrapper: 'flex flex-col w-full gap-8',
        list: {
          base: 'flex flex-nowrap',
          width: 'w-[70%]',      
          marker: {           
            background: 'bg-transparent',     
          },
        },
     
      }">
      <template #default="{ item, selected }"  >
        <span
          :class="selected ? 'border-b-2 border-azure text-azure font-bold text-p3' : 'border-transparent text-azure text-p3'" >
          {{ item.label }}
        </span>
        <span 
        :class="selected ? 'border-b-2 border-oxford-blue text-oxford-blue font-bold text-p3' : 'border-transparent text-oxford-blue text-p3'" >
        {{ item.label2 }}
      </span>
      </template>
      </UTabs>
    </div>
  </section>
</template>
