<template>
  <header class="fixed top-0 w-screen bg-transparent px-5 lg:px-20 h-1/6">
    <nav
      class="mx-auto h-full flex-column flex-wrap content-center flex justify-between"
      aria-label="Global"
    >
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <a href="#" class="">
          <span class="sr-only">Your Company</span>
          <img
            class="h-[1.875rem] lg:h-[3.5rem]"
            src="~/assets/images/novanet-emblema.svg"
          />
        </a>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden flex-1 text-p3 list-none lg:flex lg:justify-end md:block">
        <ul class="flex gap-28">
        <li>
          <a
            href="/"
            :class="{
              'border-b-2 border-black w-[6.5em] text-5xl':
                active === 'Nosotros',
            }"
            class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
            >Inicio</a
          >
        </li>

        <li>
          <a
            href="/servicios"
            :class="{
              'border-b-2 border-black w-[6.5em] text-5xl':
                active === 'Servicios',
            }"
            class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
          >
            Servicios
          </a>
        </li>

        <li>
          <a
            href="/portafolio"
            :class="{
              'border-b-2 border-black w-[6.5em] text-5xl':
                active === 'Portafolio',
            }"
            class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
          >
            Portafolio
          </a>
        </li>

        <li>
          <a
            href="/blog"
            :class="{
              'border-b-2 border-black w-[6.5em] text-5xl': active === 'Blog',
            }"
            class="pb-2 hover:border-b-2 hover:border-black w-[6.5em] text-center"
          >
            Blog
          </a>
        </li>
      </ul>
      </div>

      <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>

    <aside class="p-5 transform top-0 left-0 w-64 bg-oxford-blue fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        
      <div class="close">
        <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
          <svg 
            class="w-6 h-6"
            fill="none" stroke-linecap="round" 
            stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <span @click="isOpen = false" class="flex w-full items-center p-4">
        <Tailwind />
      </span>

      <ul class="">
        <li><a href="/" @click="isOpen = false" class="my-4 inline-block ">Inicio</a></li>
        <li><a href="/nosotros" @click="isOpen = false" class="my-4 inline-block ">Nosotros</a></li>
        <li><a href="/servicios" @click="isOpen = false" class="my-4 inline-block ">Servicios</a></li>
        <li><a href="/portafolio" @click="isOpen = false" class="my-4 inline-block ">Portafolio</a></li>
        <li><a href="/blog" @click="isOpen = false" class="my-4 inline-block ">Blog</a></li>
      </ul>

      </aside>

    </nav>
  </header>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      active: "", // Guarda el enlace activo
      isOpen: false,
    };
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    setActive(link) {
      this.active = link; // Cambia el enlace activo al hacer clic
    },
  },

  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
