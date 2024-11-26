<template>
  <UHeader :ui="{wrapper:'bg-transparent backdrop-blur-none border-0 fixed left-0 right-0', container: 'px-5 lg:px-20', panel:{body:'mt-[16.6dvh] px-8' } } ">
    <!-- Logo -->
    <template #logo>
      <div class="flex lg:flex-1">
        <a href="#" class="">
          <span class="sr-only">Your Company</span>
          <img
            class="h-[1.875rem] lg:h-[3.5rem]"
            src="~/assets/images/novanet-emblema.svg" 
          />
        </a>
      </div>
    </template>

    <template #right>
      <div class="hidden lg:flex lg:justify-end flex-1 text-p3">
        <a
          href="/ "
          @click="setActive('Inicio')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl': active === 'Inicio',
          }"
          class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Inicio
        </a>
        <a
          href="/nosotros"
          @click="setActive('Nosotros')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl': active === 'Nosotros',
          }"
          class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Nosotros
        </a>
        <a
          href="/servicios"
          @click="setActive('Servicios')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl':
              active === 'Servicios',
          }"
          class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Servicios
        </a>
        <a
          href="/portafolio"
          @click="setActive('Portafolio')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl':
              active === 'Portafolio',
          }"
          class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Portafolio
        </a>
        <a
          href="/blog"
          @click="setActive('Blog')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl': active === 'Blog',
          }"
          class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Blog
        </a>
      </div>
    </template>
    <template #panel>
      <AppHeaderLinks />
    </template>
    <!-- Desktop Menu with underline effect using Tailwind CSS -->
  </UHeader>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      active: "", // Guarda el enlace activo
    };
  },
  methods: {
    setActive(link) {
      this.active = link; // Cambia el enlace activo al hacer clic
    },
  },
};
</script>
