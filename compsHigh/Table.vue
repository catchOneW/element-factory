<template>
    <ul class="">
        <li class="df pd20 bdb" v-for="(item,index) in arr2" :key="index">
            <div class="w230 h148">
                <img class="h100p" :src="item.img" alt="">
            </div>
            <div class="fx1 pdl40 ffc">
                <div class="line2" v-text="item.text"></div>
                <div class="mta" v-text="item.time"></div>
            </div>

        </li>
    </ul>
</template>
<script>
//各种资讯列表
import SvgIcon from '../compsBase/SvgIcon'
export default {
  props: {
    arr: Array
  },
  components: {
    SvgIcon
  },
  data() {
    return {
      arr2: [
        {
          text:
            '111111111111111111111111111111111111111111111111111111111111111111111',
          img:
            'https://news.91160.com/uploads/allimg/180809/33-1PP91146110-L.jpg',
          types: [
            { name: '医疗场所2', icon: 'xuexiao' },
            { name: '医疗场所2', icon: 'xuexiao' }
          ],
          tags: ['三甲医院', '住院服务'],
          distance: '12.3km',
          address: '深圳市大鹏新区葵涌街道34号'
        },
        {
          text: '深圳大鹏新区三南社区医院',
          img:
            'https://news.91160.com/uploads/allimg/180809/33-1PP91146110-L.jpg',
          types: [
            { name: '医疗场所2', icon: 'xuexiao' },
            { name: '医疗场所2', icon: 'xuexiao' }
          ],
          tags: ['三甲医院', '住院服务'],
          distance: '12.3km',
          address: '深圳市大鹏新区葵涌街道34号'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
