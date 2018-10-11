<template>
    <div>
        <img v-preview="`新增`" src="../img/1.jpg" alt="">
    </div>
</template>

<script>
import { Subject, Observable,interval  } from 'rxjs'
import { map, startWith, scan } from 'rxjs/operators'
export default {
  data() {
    return {}
  },
  directives: {
    preview: {
      inserted(el) {},
      bind(el, binding) {
        this.$subscribeTo(interval(1000), function(count) {
          console.log(count)
        })
        el.addEventListener('mouseenter', e => {
          let {} = e
          console.log(e)
        })
        // if (pageA.includes(binding.value)) {
        //   el.style.display = 'block'
        // } else {
        //   el.style.display = 'none'
        // }
      },
      unbind() {
        console.log(1)
      },
      update(el, binding) {
        // if (pageA.includes(binding.value)) {
        //   el.style.display = 'block'
        // } else {
        //   el.style.display = 'none'
        // }
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
