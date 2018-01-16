<template lang="pug">
    ul
      li(v-for="option in options")
        a(:href="option.url") {{ option.name }}
</template>

<script>
export default {
  props: {
    options: Array
  }
}
</script>