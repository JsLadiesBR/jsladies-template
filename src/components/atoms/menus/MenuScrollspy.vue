<template lang="pug">
    b-nav(v-b-scrollspy="wrapper")
      b-nav-item(:href="option.url", v-for="(option, index) in options", :key="index") {{ option.name }}
</template>

<script>
export default {
  methods: {
    wrapper () {
      return 'wrapper'
    }
  },
  props: {
    options: Array
  }
}
</script>