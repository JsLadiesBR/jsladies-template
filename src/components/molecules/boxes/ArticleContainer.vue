<template lang="pug">
  article
    router-link(:to="url", class="image")
      img(:src="image", :alt="title")
    .inner
      h4.title {{ title }}
      span.horario
        i.fa.fa-clock
        | {{ horario }}
      span.local
        i.fa.fa-map-marker-alt
        | {{ local }}
      span.organizacao 
        i.fa.fa
        | {{ organizacao }}
      span.facebook
        a(:href=facebook)
          i.fa.fa-facebook
          | Facebook
</template>

<script>
export default {
  name: 'ArticleContainer',
  props: {
    url: String,
    image: String,
    title: String,
    horario: String,
    local: String,
    organizacao: String,
    facebook: String
  }
}
</script>