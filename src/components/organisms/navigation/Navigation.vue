<template lang="pug">

  section#header
    header
      perfil(:perfil='{ description: "JavaScript de mulheres para mulheres", logo: "{ JS Ladies }" }')
    nav(id="nav", class="navigation")
      main-menu(:options='menu')
    footer
      social-list

</template>

<script>

import Perfil from '@/components/molecules/perfil/Perfil'
import Menu from '@/components/atoms/menus/MenuScrollspy'
import SocialList from '@/components/molecules/socialnetworks/SocialList'

export default {
  data () {
    return {
      menu: [
        { name: 'JS Ladies', url: '#one' },
        { name: 'O que é o JS Ladies?', url: '#two' },
        { name: 'Eventos', url: '#three' },
        { name: 'Contato', url: '#four' }
      ]
    }
  },
  components: {
    perfil: Perfil,
    mainMenu: Menu,
    socialList: SocialList
  }
}
</script>
