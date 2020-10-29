<template>
  <div class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  // async asyncData ({ $content, params, error }) {
  //   const slug = params.slug || 'index'
  //   const article = await $content(slug)
  //     .fetch()
  //     .catch((err) => {
  //       error({ statusCode: 404, message: 'Page not found' + err })
  //     })

  //   return {
  //     article
  //   }
  // },
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content('articles', slug)
      .fetch().catch((err) => {
        error({ statusCode: 404, message: 'Page not found' + err })
      })

    return {
      page
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        { hid: 'og:description', property: 'og:description', content: this.page.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.page.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.page.description }
      ]
    }
  }
}
</script>
