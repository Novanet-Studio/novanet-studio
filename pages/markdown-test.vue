<script setup lang="ts">
const markdownContent = {
  title: "Prueba de Markdown",
  content: `
# Título Principal

## Subtítulo

**Texto en negrita**

*Texto en cursiva*

- Lista item 1
- Lista item 2

1. Número 1
2. Número 2

> Esto es una cita

\`\`\`javascript
console.log('Código de ejemplo');
\`\`\`

[Un enlace](https://nuxt.com)

![Una imagen](https://picsum.photos/200/300)
  `
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl mb-4">{{ markdownContent.title }}</h1>
    <div v-html="$mdRenderer.render(markdownContent.content)"></div>
  </div>
</template>