<template lang="pug">
  article
    router-link(:to="url", class="image")
      img(:src="image", :alt="title")
    .inner
      h4 {{ title }}
      p {{ resume }}
</template>

<script>
export default {
  name: 'ArticleContainer',
  props: {
    url: String,
    image: String,
    title: String,
    resume: String
  }
}
</script>