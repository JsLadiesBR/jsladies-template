<template lang="pug">
  #titleBar
    span(class="toggle" @click="toggleMenu")
    span.title { JS Ladies }

</template>

<script>
import $ from 'jquery'
export default {
  methods: {
    toggleMenu () {
      $('body').toggleClass('header-visible')
    }
  }
}
</script>

<style>

span.toggle {
    cursor: pointer
}

</style>
