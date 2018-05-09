<template lang="pug">
  div(:class="cidade")
    .overlay
      article.event.container
        h4.js-title {{ title }}
        .inner.col-md-6
          span.horario
            strong Horário: 
            | {{ horario }}
          span.local
            strong Local: 
            | {{ local }}
          span.organizacao 
            strong Organizadoras: 
            span.organizadoras {{ organizacao }}
          span.facebook
            strong 
              a(:href=facebook) Página no Facebook
        .col-md-6
          google
</template>

<script>
import GoogleMap from '@/components/atoms/GoogleMap'
export default {
  name: 'ArticleContainer',
  components: {
    google: GoogleMap
  },
  props: {
    url: String,
    image: String,
    title: String,
    cidade: String,
    horario: String,
    local: String,
    organizacao: String,
    facebook: String
  }
}
</script>