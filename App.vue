<template lang="pug">
.panel.panel-default
  .panel-heading
    .form-inline.xrx-toolbar
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
        button.btn.btn-default(title="Polyline",@click="drawShape('Polyline')")
          img(src="./assets/polyline.svg")
        button.btn.btn-default(title="line",@click="drawShape('Line')")
          img(src="./assets/line.svg")
      .input-group
        span.input-group-addon.hidden-sm.hidden-xs Mode
        select.form-control(@click="setMode($event.target.value)")
          option(
            v-for="value in modesEnabled",
            v-bind:value="value",
            v-bind:disabled="modesAvailable.find(x => x.value == value).disabled"
            v-bind:selected="value == mode"
          ) {{ modesAvailable.find(x => x.value == value).text }}
      .input-group
        span.input-group-addon.hidden-sm.hidden-xs SVG
        button.btn.btn-default(title="Save SVG",@click="showImexport('export')")
          img(src="./assets/save.svg")
        button.btn.btn-default(title="Save SVG",@click="showImexport('import')")
          img(src="./assets/upload.svg")
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
            | {{ parseInt(zoomValue * 100) }} %
            span.caret
          ul.dropdown-menu
            li
              a(href='#',@click="zoom(1)") 100 %
            li
              a(href='#',@click="zoom('fit')") Fit to canvas
            li
              a(href='#',@click="zoom('width')") Fit to width
            li
              a(href='#',@click="zoom('width')") Fit to height
  div(
    ref="canvas",
    v-bind:style="`width: ${width}; height: ${height}`"
  )
  // Modal
  .svg-panel.modal.fade(role='dialog', ref="svgPanel")
    .modal-dialog
      // Modal content
      .modal-content
        .modal-header
        .modal-body
          textarea(v-model="svgImExPort", placeholder="SVG here")
          button.btn.btn-success(@click="loadSvg",v-show="imexport == 'import'") Load
</template>

<script>
import xrx from 'semtonotes-client'
import XrxUtils from 'semtonotes-utils'

export default {
  name: 'app',
  data() { return {
    mode: this.initialMode,
    svgImExPort: '',
    zoomValue: this.initialZoom,
    imexport: 'import',
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
      strokeColor: '#3B3BFF',
      fillColor: '#3B3BFF',
      strokeWidth: 2,
      fillOpacity: 0.4,
      hoverable: {
        strokeColor: '#00ff00',
        fillColor: '#00ff00',
        strokeWidth: 3,
        fillOpacity: 0.4,
      },
      creatable: {
        strokeColor: '#ff0000',
        fillColor: '#ff0000',
        strokeWidth: 3,
        fillOpacity: 0.4,
      },
      selectable: {
        strokeColor: '#ff00ff',
        fillColor: '#ff00ff',
        strokeWidth: 3,
        fillOpacity: 0.4,
      },
    }}},
  },
  mounted() {
    this.image = new xrx.drawing.Drawing(this.$refs.canvas)
    // this.image.eventShapeModify = () => this.applyStyles()
    this.image.eventShapeCreated = () => {
      this.setMode('HoverMult')
      this.applyStyles()
    }
    this.image.eventShapeSelected = (shape) =>{
      console.log("selected", shape)
    }
    // this.image.eventViewboxChange = () => this.applyStyles()
    this.loadImage(this.initialImage)
  },
  methods: {
    dump(...args) { console.log(args) },
    loadImage(imgSrc) {
      this.image.setBackgroundImage(imgSrc, () => {
        this.image.getViewbox().fit(false)
        this.image.getViewbox().setZoomFactorMax(this.zoomFactorMax)
        this.zoomValue = this.image.getViewbox().getZoomValue()
        this.image.draw()
      })
    },
    setMode(mode, ...args) {
      if (mode === 'HoverMult') this.image.setModeHover(true);
      else this.image[`setMode${mode}`](...args);
      this.mode = mode
    },
    zoom(amount) {
      if (amount === 'in') this.image.getViewbox().zoomIn()
      else if (amount === 'out') this.image.getViewbox().zoomOut()
      else if (amount === 'fit') this.image.getViewbox().fit(true)
      else if (amount === 'width') this.image.getViewbox().fitToWidth(true)
      else if (amount === 'height') this.image.getViewbox().fitToHeight(true)
      else this.image.getViewbox().zoomTo(amount)
      this.zoomValue = this.image.getViewbox().getZoomValue()
      console.log(this.zoomValue)
      this.image.draw()
    },
    applyStyles() {
      console.log('yello')
      this.image.getLayerShape().getShapes().forEach(shape => {
        XrxUtils.applyStyle(shape, this.style)
      })
    },
    drawShape(shapeName) {
      const shape = new xrx.shape[shapeName](this.image)
      XrxUtils.applyStyle(shape, this.style)
      this.setMode('Create', shape.getCreatable())
      // this.image.getLayerShape().addShapes(shape)
    },
    removeShape() {
      if (this.image.getSelectedShape()) {
        window.alert("Please select a shape")
      } else {
        if (window.confirm("Delete selected shape?")) {
          this.image.removeShape(this.image.getSelectedShape())
        }
      }
    },
    showImexport(imexport) {
      this.imexport = imexport
      this.svgImExPort = (this.imexport === 'import')  
        ? '' 
        : XrxUtils.svgFromDrawing(this.image)
      $(this.$refs.svgPanel).modal('show')
    },
    loadSvg() {
      this.image.getLayerShape().removeShapes();
      XrxUtils.drawFromSvg(this.svgImExPort, this.image)
      this.applyStyles()
      $(this.$refs.svgPanel).modal('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding-left: 6px;
  padding-right: 6px;
}
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
.svg-panel {
  textarea {
    font-family: monospace;
    width: 90%;
    min-height: 200px;
  }
}
</style>
