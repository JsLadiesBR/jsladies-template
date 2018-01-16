<template lang="pug">
  section(:id="id")
    .container
      slot
</template>

<script>
export default {
  name: 'SectionContainer',
  props: {
    id: String
  }
}
</script>