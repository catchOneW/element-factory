<template>
  <div>
    <el-upload ref="upComp" class="upComp" multiple action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-success="handleSuccess" :on-remove="handleRemove" :file-list="fileList" :before-upload="beforeAvatarUpload">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [
        // {
        //   name: 1,
        //   url:
        //     'http://test.hxfzsoft.com:10099/group1/M00/00/0A/wKgWNVukmpaAMZn9AAJfCE0YoEo135.jpg'
        // },
        // {
        //   name: 1,
        //   url:
        //     'http://test.hxfzsoft.com:10099/group1/M00/00/0A/wKgWNVukmpaAMZn9AAJfCE0YoEo135.jpg'
        // },
        // {
        //   name: 1,
        //   url:
        //     'http://test.hxfzsoft.com:10099/group1/M00/00/0A/wKgWNVukmpaAMZn9AAJfCE0YoEo135.jpg'
        // }
      ]
    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log(response)
      console.log(file)
      console.log(fileList)
      this.fileList = fileList
      this.canAdd()
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isIn10Mb = file.size / 1024 / 1024 < 10
      const isLengthLt5 = this.fileList.length <= 5
      if (!isJPG) {
        console.log('只能上传图片!')
        return false
      }
      if (!isIn10Mb) {
        console.log('上传头像图片大小不能超过 10MB!')
        return false
      }

      if (!isLengthLt5) {
        console.log('最多只能上传5张图片!')
        return false
      }
      this.fileList.push({
        name: file.name,
        url: URL.createObjectURL(file),
        file: file
      })
      debugger
      return false
    },
    handleRemove(file, fileList) {
      this.fileList = fileList
      this.canAdd()
    },
    canAdd() {
      let a = this.$el.querySelector('.el-upload.el-upload--picture-card')
      if (this.fileList.length >= 5) {
        a.style.display = 'none'
      } else {
        a.style.display = 'inline-block'
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submit() {
      console.log(this.fileList)
    }
  }
}
</script>

<style lang="scss" scoped>
// .upComp {
//   .el-upload--picture-card {
//     display: none;
//   }
// }
</style>
