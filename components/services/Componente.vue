<script setup lang="ts">

const props = defineProps<{ info: any }>()


</script>


<template>
  <section v-for="(item, index) in props.info" :key="index"
    class="flex flex-col justify-center overflow-hidden w-full h-screen lg:flex-row lg:items-center" :class="item.class">
    <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-center lg:h-full lg:w-2/4">
      <NuxtImg :src="item.image" class="flex align mx-auto w-[13rem] lg:w-[37.688rem] md:w-[43rem]" />
    </div>

    <div class="flex flex-col pl-5 gap-2 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20" :class="item.containerClass">
      <!-- Título -->
      <h1 class="text-3 gap- lg:text-6 md:text-5" :class="item.titleClass">{{ item.title }} </h1>
      <div>{{ $clog(props.info) }}</div>
      <!-- Descripción -->
      <p class="text-s3 lg:text-p4 md:text-p2" :class="item.descriptionClass">
        {{ item.description }}
      </p>

      <UTabs :items="item.tabs" :ui="{
        wrapper: 'flex flex-col w-full',
        list: {
          base: 'flex justify-start w-auto',
          marker: {
            background: 'bg-transparent'
          },
          tab: {
            base: '!h-8 !w-auto !p-0', 
            inactive: 'text-azure',
            active: 'text-azure font-medium'
          },
          panel: {
            base: '!w-[60%] !text-p3 !mt-4 !p-4 !bg-columbia-blue/40 !rounded-lg' // Añadidos los estilos aquí
          }
        }
      }"> 



        <template #default="{ item, index, selected }">
          <button class="!inline-flex !items-center !justify-center !flex-shrink-0 !h-8 !px-0 !py-0 !mr-4"> <!-- Forzando estilos del botón -->
            <span v-if="item.label" 
              class="transition-all duration-200 text-left"
              :class="[
                selected 
                  ? 'border-b-2 border-azure text-azure font-medium' 
                  : 'border-b-2 border-transparent hover:text-azure',
                'text-s2 lg:text-p3'
              ]">
              {{ item.label }}
            </span>
            
            <span v-if="item.label2"
              class="transition-all duration-200 text-left"
              :class="[
                selected 
                  ? 'border-b-2 border-oxford-blue text-oxford-blue font-medium' 
                  : 'border-b-2 border-transparent hover:text-oxford-blue',
                'text-s2 lg:text-p3'
              ]">
              {{ item.label2 }}
            </span>
          </button>          
        </template>
        <template #item="{ item }">
          <div>
            <span class="font-bold">{{ item.spanText }}</span> {{ item.content }}
          </div>
        </template>
      </UTabs>
    </div>
  </section>
</template>


