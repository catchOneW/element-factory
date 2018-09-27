<template>
  <div>
    <el-upload action="" multiple list-type="picture-card" :limit="limit" :on-preview="handlePictureCardPreview" :before-upload="checkType" :file-list="fileList" :on-change="onChange" :on-remove="onRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['urls', 'limit'],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: []
    }
  },
  methods: {
    onChange(f, fl) {
      this.fileList = fl
      if (this.fileList.length == this.limit) {
        this.$el.querySelector(
          '.el-upload.el-upload--picture-card'
        ).style.display = 'none'
      }
    },
    onRemove(f, fl) {
      this.fileList = fl
      if (this.fileList.length < this.limit) {
        this.$el.querySelector(
          '.el-upload.el-upload--picture-card'
        ).style.display = 'inline-block'
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    checkType(file) {
      //checkType一旦触发，fileList会多出一个percentage=0的对象
      // if (this.fileList.length > this.limit) {
      //   this.$message.error(`只能上传${this.limit}张图片`)
      //   return false
      // }
      //
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt = file.size / 1024 / 1024 < 10
      if (!isJPG) {
        this.$message.error('只能上传图片!')
        return false
      }
      if (!isLt) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
        return false
      }
      this.fileList.push({
        name: file.name,
        url: URL.createObjectURL(file),
        raw: file
      })
      //this.$emit('addImg', file)
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
