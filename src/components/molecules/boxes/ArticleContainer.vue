<template lang="pug">
  div(:class="cidade")
    .overlay
      article.event.container
        .inner
          h4.js-title {{ title }}
          span.horario
            strong Horário: 
            | {{ horario }}
          span.local
            strong Local: 
            | {{ local }}
          span.organizacao 
            strong Organizadoras: 
            | {{ organizacao }}
          span.facebook
            a(:href=facebook)
              strong Página no Facebook
        .inner-right
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
  },
  mounted () {
    this.$refs.page.$mapPromise.then(map => {
      map.panTo({ lat: 1.38, lng: 103.80 })
    })
  }
}
</script>