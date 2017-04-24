<template lang="pug">
div(
  ref="canvas",
  v-bind:style="`width: ${width}; height: ${height}`"
)
</template>

<script>
import xrx from 'semtonotes-client'

export default {
  name: 'xrx-canvas',
  props: {
    width: {type: Number, default: 600},
    height: {type: Number, default: 400},
  },
  data() { return {
    image: null,
  }},
  methods: {
    setmode(mode) {
      this.image.setHoverMode(true)
    }
  },
  mounted() {
    this.image = new xrx.drawing.Drawing(this.$refs.canvas)
    this.image.setBackgroundImage('./assets/earth.jpg', () => {
      // this.mode = 'hover_mult'
      setTimeout(() => {
        this.image.setModeHover(true)
        this.image.getViewbox().fitToWidth(false)
        this.image.getViewbox().setZoomFactorMax(4)
        this.image.getViewbox().zoomIn()
        this.image.getViewbox().zoomIn()
        this.image.getViewbox().zoomIn()
        this.image.draw()
      }, 2000)
    })
  }
}

</script>
