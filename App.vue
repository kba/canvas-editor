<template lang="pug">
#app.container
  //- img(src="./assets/earth.jpg",style="position:fixed;top:0;left:0")
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

import ToolbarModes   from './components/toolbar-modes.vue'
import ToolbarShapes  from './components/toolbar-shapes.vue'
import ToolbarActions from './components/toolbar-actions.vue'

export default {
  name: 'app',
  data() { return {
    mode: 'hover-mult',
    image: null,
  }},
  props: {
    width: {type: Number, default: 600},
    height: {type: Number, default: 400},
  },
  components: {
    ToolbarModes,
    ToolbarShapes,
    ToolbarActions,
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
    draw(shapeName) {
      const shape = new xrx.shape[shapeName](this.image)
      const style = new xrx.shape.Style()
      style.setStrokeWidth(1)
      style.setStrokeColor('#3B3BFF')
      shape.setStyle(style)
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
</style>
