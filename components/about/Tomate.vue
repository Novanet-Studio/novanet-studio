<script setup lang="ts">
const clog = (e: any) => {
  console.log("Mi array tiene " + e.length + " items");
};

defineProps({
  tittle2: {
    required: false,
  },

 description2: {
    type: String,
    required: false,
  },

  imageSrc2: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <section>
    <div v-if="imageSrc2" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
      <NuxtImg
        :src="imageSrc2"
        class=""/>
    </div>
      <!-- Contenedor del Texto -->
      <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20">
        <!-- Título -->
        <h1 class="text-3 lg:text-6 md:text-5" ">{{tittle2 }}</h1>
  
        <!-- Texto Largo -->
        <p class="text-s3  lg:text-p4  md:text-p2">
          {{description2}}
        </p>
      </div>
  
      <div v-if="imageSrc2" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
        <NuxtImg
          :src="imageSrc2"
          class=""/>
      </div>
        <!-- Contenedor del Texto -->
        <div class="flex flex-col pl-5 gap-3 md:pl-9 lg:pt-0 lg:gap-5 lg:h-4/6 lg:pl-20">
          <!-- Título -->
          <h1 class="text-3 lg:text-6 md:text-5" ">{{tittle2 }}</h1>
    
          <!-- Texto Largo -->
          <p class="text-s3  lg:text-p4  md:text-p2" ">
            {{description2}}
          </p>
        </div>
</section>
</template>
