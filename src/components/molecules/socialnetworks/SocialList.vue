<template lang="pug">
  ul.icons
    li: icon(class="icon fa-twitter" url="#" name="Twitter")
    li: icon(class="icon fa-facebook" url="#" name="Facebook")
    li: icon(class="icon fa-instagram" url="#" name="Instagram")
    li: icon(class="icon fa-github" url="#" name="Github")
    li: icon(class="icon fa-envelope" url="#" name="Email")
</template>

<script>
import Icon from '@/components/atoms/socialnetworks/Icon'
export default {
  components: {
    icon: Icon
  },
  props: {
    icons: Array
  }
}
</script>
