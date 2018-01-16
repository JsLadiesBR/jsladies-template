<template lang="pug">
  a(:href="url", :class="`icon ${icon}`")
    span(class="label") {{ name }}  
</template>

<script>
export default {
  props: {
    url: String,
    icon: String,
    name: String
  }
}
</script>
