import { marked } from 'marked';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      mdRenderer: {
        render: (content: string) => marked(content)
      }
    }
  }
})