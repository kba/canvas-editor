<template lang="pug">
#app.container
  .container
    .row
      .col-xs-12
        .form-inline.xrx-toolbar
          toolbar-modes(
            ref="modes",
            @select-mode="setMode($event)"
          )
          toolbar-shapes(
            ref="shapes",
            @draw="draw($event)"
          )
          toolbar-actions
          toolbar-zoom(
            @zoom="setZoomFactor($event)"
            )
    .row
      .col-xs-12
        .panel.panel-primary
          .panel-heading Canvas
          div(
            ref="canvas",
            v-bind:style="`width: ${width}; height: ${height}`"
          )
</template>

<script>
import xrx from 'semtonotes-client'
import XrxUtils from 'semtonotes-utils'

import ToolbarModes   from './components/toolbar-modes.vue'
import ToolbarShapes  from './components/toolbar-shapes.vue'
import ToolbarActions from './components/toolbar-actions.vue'
import ToolbarZoom from './components/toolbar-zoom.vue'

export default {
  name: 'app',
  data() { return {
    mode: 'hover-mult',
    zoom: this.initialZoom,
    image: null,
  }},
  props: {
    width: {type: Number, default: 600},
    height: {type: Number, default: 400},
    initialZoom: {type: Number, default: 1},
    zoomStep: {type: Number, default: 0.1},
  },
  components: {
    ToolbarModes,
    ToolbarShapes,
    ToolbarActions,
    ToolbarZoom,
  },
  mounted() {
    this.image = new xrx.drawing.Drawing(this.$refs.canvas)
    this.image.setBackgroundImage('./assets/earth.jpg', () => {
      // this.mode = 'hover_mult'
      this.image.getViewbox().fitToWidth(false)
      this.image.getViewbox().setZoomFactorMax(4)
      this.image.getViewbox().zoomIn()
      this.image.getViewbox().zoomIn()
      this.image.getViewbox().zoomIn()
      this.image.draw()
    })
  },
  methods: {
    dump(...args) { console.log(args) },
    setMode(mode) {
      if (mode === 'HoverMult') {
        this.image.setModeHover(true);
      } else {
        this.image[`setMode${mode}`]();
      }
      this.mode = mode
    },
    setZoomFactor(amount) {
      if (amount === 'in') {
        this.zoom += this.zoomStep
      }
      console.log(this.zoom)
      this.image.getViewbox().setZoomFactor(this.zoom)
      this.image.draw()
    },
    draw(shapeName) {
      const shape = new xrx.shape[shapeName](this.image)
      // const style = new xrx.shape.Style()
      // style.setStrokeWidth(1)
      // style.setStrokeColor('#3B3BFF')
      // shape.setStyle(style)
      shape.getHoverable().setFillColor('#00ff00')
      shape.getHoverable().setFillOpacity(1)
      XrxUtils.applyStyle(shape, {
        strokeWidth: 1,
        strokeColor: '#3B3BFF',
        fillColor: '#3B3BFF',
        fillOpacity: 0.4,
        hoverable: {
            strokeWidth: 1,
            strokeColor: '#00ff00',
            fillColor: '#00ff00',
            fillOpacity: 0.4,
        },
        creatable: {
            strokeWidth: 1,
            strokeColor: '#ff0000',
            fillColor: '#ff0000',
            fillOpacity: 0.4,
        },
        selectable: {
            strokeColor: '#ff00ff',
            fillColor: '#ff00ff',
        },
      })
      this.setMode('Create')
      this.image.setModeCreate(shape.getCreatable())
    }
  }

}
</script>

<style>
.panel {
  background: transparent
}
/* .xrx-toolbar .input-group { display: inline-table !important }*/
.xrx-toolbar .input-group,
.xrx-toolbar select,
.xrx-toolbar .dropdown-toggle
{
  height: 37px;
}
button > img {
  height: 26px;
}
</style>
