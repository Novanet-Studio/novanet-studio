<template>
  <header class="fixed top-0 w-screen bg-transparent px-20 pt-20">
    <nav
      class="mx-auto flex max items-center justify-between "
      aria-label="Global"
    >
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <a href="#" class="">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="~/assets/images/novanet-emblema.svg"
          />
        </a>
      </div>

      <!-- Desktop Menu with underline effect using Tailwind CSS -->
      <div class="hidden lg:flex lg:gap-x-2 lg:justify-end flex-1">
        <a
          href="#"
          @click="setActive('Inicio')"
          :class="{ 'border-b-2 border-black w-[6.5em]': active === 'Inicio' }"
          class="text-xl font-semibold text-gray-900 pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Inicio
        </a>
        <a
          href="#"
          @click="setActive('Nosotros')"
          :class="{
            'border-b-2 border-black w-[6.5em]': active === 'Nosotros',
          }"
          class="text-xl font-semibold text-gray-900 pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Nosotros
        </a>
        <a
          href="#"
          @click="setActive('Servicios')"
          :class="{
            'border-b-2 border-black w-[6.5em]': active === 'Servicios',
          }"
          class="text-xl font-semibold text-gray-900 pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Servicios
        </a>
        <a
          href="#"
          @click="setActive('Portafolio')"
          :class="{
            'border-b-2 border-black w-[6.5em]': active === 'Portafolio',
          }"
          class="text-xl font-semibold text-gray-900 pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
        >
          Portafolio
        </a>
        <a
          href="#"
          @click="setActive('Blog')"
          :class="{ 'border-b-2 border-black w-[6.5em]': active === 'Blog' }"
          class="text-xl font-semibold text-gray-900 pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
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
