<template>
  <div class="mobileSelect">
    <p v-for="i in rows" :key="i">{{i}}</p>
    <select name="" id="">
        <option value="">aaaaaa</option>
    </select>
    <el-select   :popper-append-to-body="showDrop" v-model="value" placeholder="请选择" @change="change">
      <el-option v-for="item in selectArr" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <p v-for="i in rows" :key="i">{{i}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      rows: [],
      showDrop:false,
      selectArr: [
        {
          value: 1,
          label: "黄金糕"
        },
        {
          value: 2,
          label: "双皮奶"
        }
      ]
    };
  },
  created() {
    for (let index = 0; index < 50; index++) {
      this.rows.push(index);
    }
  },
  methods: {
    change(v) {
      this.v = v;
    }
  }
};
</script>

<style>
</style>
