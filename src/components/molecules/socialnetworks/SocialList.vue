<template lang="pug">
  ul.icons
    li: icon(class="icon fa-twitter" url="https://twitter.com/jsladiessp" name="Twitter")
    li: icon(class="icon fa-facebook" url="https://www.facebook.com/jsladiesbr" name="Facebook")
    li: icon(class="icon fa-github" url="https://github.com/JsLadiesBR" name="Github")
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
