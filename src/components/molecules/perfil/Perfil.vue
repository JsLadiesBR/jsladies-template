<template lang="pug">
  div
    avatar(:src="perfil.image", :alt="perfil.logo")
    h1#logo: router-link(to="/") {{ perfil.logo }}
    p {{ perfil.description }}
</template>

<script>
import Avatar from '@/components/atoms/perfil/Avatar'
export default {
  components: {
    avatar: Avatar
  },
  props: {
    perfil: {
      logo: String,
      description: String
    }
  }
}
</script>