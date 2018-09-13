<template>
    <div>
        <div @click="obj.mp++">+++</div>
        <div v-permisiton="obj">{{obj.mp}}</div>
        <div>{{obj.ps}}</div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        ps: [1, 2, 3],
        mp: 0
      }
    }
  },
  directives: {
    permisiton: {
      inserted(el) {},
      bind(el, binding) {
        let obj = binding.value
        if (obj.ps.includes(obj.mp)) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      },
      unbind() {
        console.log(1)
      },
      update(el, binding) {
        let obj = binding.value
        if (obj.ps.includes(obj.mp)) {
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
