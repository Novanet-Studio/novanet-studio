<script setup lang="ts">
const links = [{
  label: 'inicio',

  to: '/'
}, {
  label: 'Nosotros',

  to: '/nosotros'
}, {
  label: 'Servicios',

  to: '/servicios'
}, {
  label: 'Portafolio',

  to: '/portafolio'
}, {
  label: 'Blog',

  to: '/blog'
}]
</script>

<template>
  <UAsideLinks :links="links" />
</template>

