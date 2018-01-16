<template lang="pug">
    button(type='button', :class="color", id='') 
      i(v-if="icon", :class="icon")
      | {{ label }}
</template>

<script>
export default {
  computed: {
    color () {
      return this.type
    }
  },
  props: {
    icon: String,
    label: String,
    type: String
  }
}    
</script>