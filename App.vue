<template lang="pug">
.panel.panel-default
  .panel-heading
    .form-inline.xrx-toolbar
      .input-group
        span.input-group-addon.hidden-sm.hidden-xs Mode
        select.form-control(@click="setMode($event.target.value)")
          option(
            v-for="value in modesEnabled",
            v-bind:value="value",
            v-bind:disabled="modesAvailable.find(x => x.value == value).disabled"
            v-bind:selected="value == mode"
          ) {{ modesAvailable.find(x => x.value == value).text }}
      .input-group.btn-group
        span.input-group-addon.hidden-sm.hidden-xs Shape
        button.btn.btn-default(title="Polygon",@click="drawShape('Polygon')")
          img(src="./assets/polygon.svg")
        button.btn.btn-default(title="Rectangle",@click="drawShape('Rect')")
          img(src="./assets/rectangle.svg")
        button.btn.btn-default(title="Ellipse",@click="drawShape('Ellipse')")
          img(src="./assets/ellipsis.svg")
        button.btn.btn-default(title="Circle",@click="drawShape('Circle')")
          img(src="./assets/circle.svg")
      .input-group.btn-group
        span.input-group-addon.hidden-xs.hidden-sm Action
        button.btn.btn-default(@click="setMode('Modify')",title="Select")
          img(src="./assets/cursor.svg")
        button.btn.btn-default(title="Delete",@click="removeShape")
          img(src="./assets/delete.svg")
      .input-group.btn-group
        span.input-group-addon.hidden-sm.hidden-xs Zoom
        button.btn.btn-default(title="Zoom in",@click="zoom('in')")
          img(src="./assets/zoom-in.svg")
        button.btn.btn-default(title="Zoom out",@click="zoom('out')")
          img(src="./assets/zoom-out.svg")
        span.dropdown
          button.btn.btn-default.dropdown-toggle(type='button', data-toggle='dropdown')
            | {{ zoomValue * 100 }} %
            span.caret
          ul.dropdown-menu
            li
              a(href='#') 100 %
            li
              a(href='#') Fit to canvas
            li
              a(href='#') Fit to width
  .panel-body
    div(
      ref="canvas",
      v-bind:style="`width: ${width}; height: ${height}`"
    )
</template>

<script>
import xrx from 'semtonotes-client'
import XrxUtils from 'semtonotes-utils'

export default {
  name: 'app',
  data() { return {
    mode: this.initialMode,
    zoomValue: this.initialZoom,
    image: null,
  }},
  props: {
    width: {type: Number, default: 600},
    height: {type: Number, default: 400},
    zoomFactorMax: {type: Number, default: 4},
    initialZoom: {type: Number, default: 1},
    initialImage: {type: String, default: './assets/earth.jpg'},
    initialMode: {type: String, default: 'HoverMult'},
    modesEnabled: {type: Array, default(){return[
      'Hover',
      'HoverMult',
      'Modify',
      'Create',
      'Select'
    ]}},
    modesAvailable: {type: Array, default(){return [
      {value: 'Hover', text: 'Hover'},
      {value: 'HoverMult', text: 'Hover (multiple)'},
      {value: 'Modify', text: 'Modify'},
      {value: 'Create', text: 'Create', disabled: true},
      {value: 'Select', text: 'Select'},
    ]}},
    style: {type: Object, default() { return {
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
    }}},
  },
  mounted() {
    this.image = new xrx.drawing.Drawing(this.$refs.canvas)
    this.image.eventShapeModify = () => this.applyStyles()
    this.image.eventViewboxChange = () => this.applyStyles()
    this.image.setBackgroundImage(this.initialImage, () => {
      this.image.getViewbox().fitToWidth(false)
      this.image.getViewbox().setZoomFactorMax(this.zoomFactorMax)
      this.image.draw()
    })
  },
  methods: {
    dump(...args) { console.log(args) },
    setMode(mode, ...args) {
      if (mode === 'HoverMult') this.image.setModeHover(true);
      else this.image[`setMode${mode}`](...args);
      this.mode = mode
    },
    zoom(amount) {
      if (amount === 'in') this.image.getViewbox().zoomIn()
      else if (amount === 'out') this.image.getViewbox().zoomOut()
      else this.image.getViewbox().setZoomValue(amount)
      this.zoomValue = this.image.getViewbox().getZoomValue()
      console.log(this.zoomValue)
      this.image.draw()
    },
    applyStyles() {
      this.image.getLayerShape().getShapes().forEach(shape => {
        XrxUtils.applyStyle(shape, this.style)
      })
    },
    drawShape(shapeName) {
      const shape = new xrx.shape[shapeName](this.image)
      XrxUtils.applyStyle(shape, this.style)
      this.setMode('Create', shape.getCreatable())
      this.image.getLayerShape().addShapes(shape)
    },
    removeShape() {
      if (this.image.getSelectedShape() === undefined) {
        window.alert("Please select a shape")
      } else {
        if (window.confirm("Delete selected shape?")) {
          this.image.removeShape(this.image.getSelectedShape())
        }
      }
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
