<template>
    <div>
        <el-upload ref="upComp" class="upComp" multiple :auto-upload="false" action="http://192.168.22.222:8080/file/singleUploadFileName" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :file-list="fileList" :on-change="change">
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
    change(file, fileList) {
      //   const isJPG = file.type === 'image/jpeg'
      //   const isLt2M = file.size / 1024 / 1024 < 10
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!')
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 10MB!')
      //   }
      //   if (this.imageUrls.length >= 5) {
      //     return
      //   }
      //   this.imageUrls.push(URL.createObjectURL(file))
      console.log(file)
      console.log(fileList)
      this.canAdd(fileList)
    },
    handleRemove(file, fileList) {
      console.log(file)
      console.log(fileList)
      this.canAdd(fileList)
    },
    canAdd(fileList) {
      this.fileList = fileList
      let a = this.$el.querySelector('.el-upload.el-upload--picture-card')
      if (this.fileList.length == 1) {
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
