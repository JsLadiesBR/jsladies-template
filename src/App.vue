<template lang="pug">
  #app
    mobile-header
    navigation
    router-view
</template>

<script>
import Navigation from '@/components/organisms/navigation/Navigation'
import MobileHeader from '@/components/molecules/header/MobileHeader'
export default {
  name: 'app',
  components: {
    navigation: Navigation,
    mobileHeader: MobileHeader
  }
}
</script>