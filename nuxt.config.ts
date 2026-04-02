export default defineNuxtConfig({
  extends: ['docus'],
  routeRules: {
    '/_nuxt/**': { robots: false } as never,
  },
})
