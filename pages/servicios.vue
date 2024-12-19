<script lang="ts" setup>
const aboutus = [
  {
    name: 'Nosotros',
    class: 'pt-[15rem] bg-white text-oxford-blue background-emblem-3',
    title: 'Nuestros servicios están orientados a los usuarios',
    description: 'Analizamos en detalle para comprender sus requerimientos, deseos y comportamientos y así crear soluciones que resuelvan eficazmente sus problemas y mejoren su experiencia.',
    titleClass: 'border-b-2 border-solid border-azure w-[90%] lg:w-[50%]',
    spanText:"",
    descriptionClass: 'w-[90%] lg:w-[50%] text-oxford-blue',
    containerClass: 'h-0 w-full items-center lg:justify-center',
    linkText: 'Diseño gráfico',
    linkText2: 'Tecnologías web',
    linkText3: 'Asesoría',
    linkUrl: '/',
    linkUrl2: '/nosotros',
    linkUrl3: '/portafolio',

  }
]

const services = [
  {
    name: "Principal",
    title: "Diseño gráfico",
    class: "bg-columbia-blue text-oxford-blue",
    description: "Proporcionamos soluciones creativas que conectan a las empresas con sus usuarios y fortalecen sus marcas. Con un enfoque en la reatividad, colaboramos estrechamente con nuestros clientes para crear diseños de alto impacto.",
    image: "images/diseno-grafico.webp",
    descriptionClass: " lg:w-[90%] md:w-[90%]",
    labelClass:"text-azure",    

    tabs: [
      {
    label: "Identidad visual",
    spanText:"Diseño de sitios web y redes sociales",
    content: "Diseñamos folletos, tarjetas de presentación y contenido para redes sociales."
  },
  {
    label: "Impresos y digital",
    spanText:"Diseño de materiales: ",
    content: "Diseñamos folletos, tarjetas de presentación y contenido para redes sociales."
  },
  {
    label: "Diseño web y rrss",
    spanText:"Diseño web y redes sociales:",
    content: "Proponemos diseños visualmente atractivos y funcionales que mejoran tu presencia en línea. Nos aseguramos de que tu sitio web y perfiles sociales reflejen tu marca, atraigan a tu audiencia y ofrezcan una experiencia de usuario óptima, impulsando el crecimiento y la interacción digital"
  }
    ]
  },
  {
    name: "Principal",
    title: "Tecnologías web",
    class: "bg-oxford-blue text-columbia-blue lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description: "Utilizamos las tecnologías más modernas para crear sitios y aplicaciones que conectan los servicios y productos de las empresas con los usuarios. Con un enfoque en la innovación y la eficiencia, construimos soluciones digitales robustas, seguras y escalables.",
    image: "images/tecnologia.webp",
    descriptionClass: "lg:w-[90%] md:w-[90%]",
    
    tabs: [
      {
        label: "Aplicaciones web",
        spanText:"Desarrollo web:",
        content: " Creamos sitios web personalizados y responsivos."
      },
      {
        label: "Soporte técnico",
        spanText:"Soporte técnico:",
        content: " Mejoramos el rendimiento de los sitios para motores de búsqueda."
      },
      {
        label: "Pagos online",
        spanText:"Pasarelas de pago:",
        content: "Son elementos cruciales en el comercio electrónico. Estos llamativos botones, como Comprar ahora o Pagar, facilitan transacciones seguras y rápidas, conectando a los usuarios con pasarelas de pago y simplificando la experiencia de compra."
      }
    ]
  },
  {
    name: "Principal",
    title: "Asesoria",
    class: "bg-azure text-columbia-blue lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description: "Asesoramos con orientación en la colaboración y el trabajo en equipo para ofrecer soluciones personalizadas que conectan a las empresas con sus objetivos. Trabajamos estrechamente con nuestros clientes, integrando sus conocimientos y experiencias con las nuestras, para crear estrategias efectivas que impulsen el crecimiento",
    buttonLink: "#",
    image: "images/asesoria.webp",
    descriptionClass: 'lg:w-[90%] md:w-[90%]',

    tabs: [
      {
        label2: "Estrategia de marca",
        textSpan:"Estrategia de marca:",
        content: " Creamos sitios web personalizados y responsivos."
      },
      {
        label2: "Estrategia de marketing",
        textSpan:"Estrategia de marketing:",
        content: "Mejoramos el rendimiento de los sitios para motores de búsqueda."
      },
      {
        label2: "Marketing online",
        textSpan:"Marketing online:",
        content: "Conocido también como marketing digital o internet marketing, es una forma de promoción que utiliza el internet y la tecnología para conectar con posibles clientes. Se presenta en plataformas como redes sociales, sitios web, correos electrónicos y otros canales digitales"
      }
    ]
  }
]
</script>

<template>
  <CommonHero :content="aboutus" />
  <ServicesComponente :info="services" />
</template>
