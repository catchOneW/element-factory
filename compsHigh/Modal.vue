<template>
  <div>
    <el-table :data="arr2" border style="width: 100%" ref="multipleTable">
      <el-table-column prop="a" label="姓名">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="small" @click="detail(scope.$index, scope.row)">详情</el-button>
          <el-button size="small" type="danger" @click="resetPassword(scope.row)">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
//各种资讯列表
import SvgIcon from '../compsBase/SvgIcon'

export default {
  props: {
    arr: Array
  },
  components: {
    SvgIcon,
  },
  data() {
    return {
      arr2: [
        {
          a: 1111
        }
      ]
    }
  },
  methods: {
    detail() {},
    resetPassword() {}
  }
}
</script>
<style lang="scss" scoped>
</style>
