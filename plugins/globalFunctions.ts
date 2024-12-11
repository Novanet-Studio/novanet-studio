export default defineNuxtPlugin(() => {
   return {
      provide: {
         clog: (e: any) => {
            console.log(e);
         },
      }
   }
})