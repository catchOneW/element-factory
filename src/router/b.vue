<template>
  <div>
    <div>
      用户名{{userName}}
    </div>
  </div>
</template>

<script>
import validate from 'validate.js'

export default {
  data() {
    return {
      userName: ''
    }
  },
  created() {
    this.userName = this.$route.query.userName
    console.log(validate.capitalize('foobar'))
  }
}
</script>
<style>
</style>
