<template>
    <div>
        <div class="pd10" v-mouseRight>节点1</div>
        <div class="pd10" v-mouseRight>节点2</div>
        <div class="pd10" v-mouseRight>节点3</div>
    </div>
</template>

<script>
import Vue from 'vue'

let pageA = ['新增', '修改']
let x, y

var MyComponent = Vue.extend({
  props: ['prop1'],
  template: `
    <div>
      <p>data: {{message}}</p>
      <p>props: {{prop1}}</p>
      <p><button @click="$emit('hi')">emit</button></p>
    </div>
  `,
  data() {
    return {
      message: 'my component'
    }
  }
})

function addMenu(x, y) {
  var c = (new MyComponent({
    propsData: {
      prop1: 'prop1'
    }
  }).$mount())

  document.body.appendChild(c.$el)

  c.$on('hi', () => {
    console.log('hi from myComponent')
  })
}
function removeMenu(x, y) {
  this.c.$el.remove()
  this.c.$destroy()
  this.c = null
}
export default {
  data() {
    return {}
  },
  directives: {
    mouseRight: {
      inserted(el) {
        el.addEventListener('contextmenu', function(evt) {
          evt.preventDefault()
          x = evt.clientX
          y = evt.clientY
          addMenu(x, y)
        })
      },
      bind(el, binding) {},
      unbind() {},
      update(el, binding) {},
      componentUpdated() {}
    }
  }
}
</script>

<style>
</style>
