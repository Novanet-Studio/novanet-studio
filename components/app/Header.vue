<template>
  <header class="fixed top-0 w-screen bg-transparent px-20 h-1/6">
    <nav
      class="mx-auto h-full flex flex-column flex-wrap content-center"
      aria-label="Global"
    >
      <!-- Logo -->
      <div class="flex lg:flex-1 ">
        <a href="#" class="">
          <span class="sr-only">Your Company</span>
          <img
            class="lg:w-auto  "
            src="~/assets/images/novanet-emblema.svg"
          />
        </a>
      </div>

      <!-- Desktop Menu with underline effect using Tailwind CSS -->
      <div class="hidden lg:flex lg:justify-end flex-1 text-p3">
        <a
          href="/ "
          @click="setActive('Inicio')"
          :class="{ 'border-b-2 border-black w-[6.5em] text-5xl': active === 'Inicio' }"
          class=" pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Inicio
        </a>
        <a
          href="/nosotros"
          @click="setActive('Nosotros')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl': active === 'Nosotros',
          }"
          class=" pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Nosotros
        </a>
        <a
          href="/servicios"
          @click="setActive('Servicios')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl': active === 'Servicios',
          }"
          class=" pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Servicios
        </a>
        <a
          href="/portafolio"
          @click="setActive('Portafolio')"
          :class="{
            'border-b-2 border-black w-[6.5em] text-5xl': active === 'Portafolio',
          }"
          class=" pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Portafolio
        </a>
        <a
          href="/blog"
          @click="setActive('Blog')"
          :class="{ 'border-b-2 border-black w-[6.5em] text-5xl': active === 'Blog' }"
          class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Blog
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      active: '', // Guarda el enlace activo
    }
  },
  methods: {
    setActive(link) {
      this.active = link // Cambia el enlace activo al hacer clic
    },
  },
}
</script>
