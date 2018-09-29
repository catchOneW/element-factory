<template>
  <div>
    <button v-permisiton="`新增`">新增</button>
    <button v-permisiton="`修改`">修改</button>
    <button v-permisiton="`删除`">删除</button>
  </div>
</template>

<script>
let pageA = ['新增', '修改']
export default {
  data() {
    return {}
  },
  directives: {
    permisiton: {
      inserted(el) {},
      bind(el, binding) {
        if (pageA.includes(binding.value)) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      },
      unbind() {
        console.log(1)
      },
      update(el, binding) {
        if (pageA.includes(binding.value)) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      },
      componentUpdated() {
        console.log(4)
      }
    }
  }
}
</script>

<style>
</style>
