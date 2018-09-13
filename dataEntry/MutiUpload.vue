<template>
    <div>
        <el-upload class="avatar-uploader" action="" multiple :before-upload="beforeAvatarUpload">
            <div class="df">
                <img v-if="imageUrls.length" v-for="(item,index) in imageUrls" :key="index" :src="item" class="avatar ml10">
            </div>
            <i v-if="!imageUrls.length" class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrls: []
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg'
      //   const isLt2M = file.size / 1024 / 1024 < 10
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!')
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 10MB!')
      //   }
      if (this.imageUrls.length >= 5) {
        return
      }
      this.imageUrls.push(URL.createObjectURL(file))
      this.$forceUpdate()
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
