<template>
    <div>
        <div>
            <input type="text"  :value="formatDate">
        </div>
        <div>
            <select name="" id="" v-model="value1">
                <option v-for="item in arr1" :key="item" :value="item">{{item}}</option>
            </select>
            <select name="" id="" v-model="value2">
                <option v-for="item in arr2" :key="item" :value="item">{{item}}</option>
            </select>
            <select name="" id="" v-model="value3">
                <option v-for="item in arr3" :key="item" :value="item">{{item}}</option>
            </select>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: [2018, 2019, 2020],
      value1: '',
      arr2: [12, 11, 10],
      value2: '',
      arr3: [1, 2, 3],
      value3: ''
    }
  },
  computed:{
      formatDate(){
          return this.value1+'/'+this.value2+'/'+this.value3
      }
  }
}
</script>

<style>
</style>
