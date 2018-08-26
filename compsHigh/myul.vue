<template>
    <div>
        <ul class="ai-jc">
            <li class="col2 pd10 por b" v-for="(item,index) in data" :key="index">
                <img class="w100p a" :src="item.imgUrl" alt="">
                <div class="tac poa50" v-text="item.name"></div>
                <div class="tac" v-text="item.eng"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.data = [
      {
        id: '1',
        imgUrl:
          'https://dshop-1256388678.cos.ap-guangzhou.myqcloud.com/pc/index/ct1.png',
        name: '钻石女戒',
        eng: 'DIAMOND PROPERTY'
      },
      {
        id: '2',
        imgUrl:
          'https://dshop-1256388678.cos.ap-guangzhou.myqcloud.com/pc/index/ct1.png',
        name: '钻石女戒2',
        eng: 'DIAMOND PROPERTY'
      },
      {
        id: '3',
        imgUrl:
          'https://dshop-1256388678.cos.ap-guangzhou.myqcloud.com/pc/index/ct1.png',
        name: '钻石女戒3',
        eng: 'DIAMOND PROPERTY'
      },
      {
        id: '4',
        imgUrl:
          'https://dshop-1256388678.cos.ap-guangzhou.myqcloud.com/pc/index/ct1.png',
        name: '钻石女戒4',
        eng: 'DIAMOND PROPERTY'
      },
      {
        id: '5',
        imgUrl:
          'https://dshop-1256388678.cos.ap-guangzhou.myqcloud.com/pc/index/ct1.png',
        name: '钻石女戒5',
        eng: 'DIAMOND PROPERTY'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.b {
  overflow: hidden;
  height: 200px;
}
.a {
  transition: all 0.5s linear;
}
.a:hover {
  transform: scale(1.1);
  opacity: 0.5;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.5);
}
</style>
