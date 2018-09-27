<template>
  <div>
    <el-upload action="" multiple list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="beforeAvatarUpload" :file-list="fileList">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  props:['urls'],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  computed: {
    fileList() {
      return this.urls.map((e, index) => {
        return {
          name: index,
          url: e
        }
      })
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this.$emit('removeImg', fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt = file.size / 1024 / 1024 < 10
      if (!isJPG) {
        this.$message.error('只能上传图片!')
        return
      }
      if (!isLt) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
        return
      }
      this.$emit('addImg', file)
      return false //阻止el组件的自动提交
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
