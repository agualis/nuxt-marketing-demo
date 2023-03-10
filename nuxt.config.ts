// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/content',
  ],
  content: {
      // https://content.nuxtjs.org/api/configuration
  },
  components: {
      dirs: [
        '~/components/_global',
        '~/components/menu',
        '~/components/icons',
      ]
  },
})


