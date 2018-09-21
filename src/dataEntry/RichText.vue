<template>
    <div class="editor">
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @change="change">
        </quill-editor>
    </div>
</template>


<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor, Quill } from 'vue-quill-editor'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)
export default {
  components: { quillEditor },
  data() {
    return {
      content: '',
      // 富文本框参数设置
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: 'file',
            action: `http://192.168.22.222:8080/file/singleUploadFileName`,
            response: res => {
                debugger
              return res.data
            }
          },
          toolbar: {
            container: container,
            handlers: {
              image: function() {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        }
      }
    }
  },
  methods:{
      change(e){
          console.log(e);
      }
  }
}
</script>
<style>
.editor {
  width: 500px;
}
</style>
