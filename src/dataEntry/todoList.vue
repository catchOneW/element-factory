<template>
    <div>
        <input type="text" v-model="a">
        <input type="text" v-model="b">
        <button @click="add">添加</button>
        <table>
            <tr>
                <td>参数</td>
                <td>参数说明</td>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.a}}</td>
                <td>{{item.b}}</td>
                <td @click="list.splice(index,1)">X</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a: '',
      b: '',
      list: []
    }
  },
  methods: {
    add() {
      this.list.push({
        a: this.a,
        b: this.b
      })
    }
  }
}
</script>

<style>
</style>
