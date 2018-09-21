<template>
    <div>
        <el-upload ref="upComp" class="aaaaaaaa" :auto-upload="false" action="http://192.168.22.222:8080/file/singleUploadFileName" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :file-list="fileList" :on-change="change">
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
      fileList: []
    }
  },
  methods: {
    change(file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    exceed(file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    submit() {
      console.log(this.fileList)
    },
    handleRemove(file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style>
/* .el-upload.el-upload--picture-card {
  display: none;
} */
</style>
