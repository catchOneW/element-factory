<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    }
  }
}
</script>

<style>
.icon {
  width: 0.54rem;
  height: 0.54rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
