<template>
    <div>
        <div>
            用户名{{userName}}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  },
  created() {
    this.userName = this.$route.query.userName
  }
}
</script>

<style>
</style>
