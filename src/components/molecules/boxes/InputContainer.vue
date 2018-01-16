<template lang="pug">
  div(:class="span")
    slot
</template>

<script>
export default {
  name: 'InputContainer',
  props: {
    span: String
  }
}
</script>