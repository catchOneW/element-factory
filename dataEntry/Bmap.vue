<template>
    <div>
        <div>{{address}}</div>
        <baidu-map @click="clickMap" class="bm-view" center="深圳" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="活动地点" :labelStyle="{color: 'red', fontSize : '16px'}" :offset="{width: -35, height: 30}" />
            </bm-marker>
            <bm-local-search :auto-viewport="true" :location="center"></bm-local-search>
        </baidu-map>
    </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map'

export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 15,
      address: '',
      BMap: {}
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.BMap = BMap
      this.center.lng = 116.404
      this.center.lat = 39.915
    },
    clickMap({ type, target, point, pixel, overlay }) {
      let { lng, lat } = point
      this.center.lng = lng
      this.center.lat = lat
      //
      let p = new this.BMap.Point(lng, lat) //获取当前地理名称
      let gc = new this.BMap.Geocoder()
      gc.getLocation(p, rs => {
        let addComp = rs.addressComponents
        this.address =
          addComp.province +
          ', ' +
          addComp.city +
          ', ' +
          addComp.district +
          ', ' +
          addComp.street +
          ', ' +
          addComp.streetNumber
      })
    }
  }
}
</script>
<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
