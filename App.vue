<template lang="pug">
.panel.panel-default
  .panel-heading(v-if="showToolbar")
    .form-inline.xrx-toolbar
      .input-group
        span.input-group-addon.hidden-sm.hidden-xs Mode
        button(title="Hover",@click="setMode('HoverMult')",v-bind:class="`btn btn-default ${!!mode.match(/^Hover/)?'active':''}`")
          img(src="./assets/hand.svg")
        button(@click="setMode('Modify')",title="Modify",v-bind:class="`btn btn-default ${mode === 'Modify'?'active':''}`")
          img(src="./assets/hand-point.svg")
        button(@click="setMode('Select')",title="Select",v-bind:class="`btn btn-default ${mode === 'Select'?'active':''}`")
          img(src="./assets/cursor.svg")
        select.form-control(@click="setMode($event.target.value)",v-if="showToolbarModeList")
          option(
            v-for="value in modesEnabled",
            v-bind:value="value",
            v-bind:disabled="modesAvailable.find(x => x.value == value).disabled"
            v-bind:selected="value == mode"
          ) {{ modesAvailable.find(x => x.value == value).text }}
      .input-group.btn-group(v-if="mode === 'Select'")
        span.input-group-addon.hidden-xs.hidden-sm Action
        button.btn.btn-default(title="Copy",@click="copyShape",v-bind:disabled="!selectedShape")
          img(src="./assets/copy.svg")
        button.btn.btn-default(title="Remove",@click="removeSelected",v-bind:disabled="!selectedShape")
          img(src="./assets/remove.svg")
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
        span.input-group-addon.hidden-sm.hidden-xs File
        button.btn.btn-default(title="Save SVG",@click="showImexport('export')")
          img(src="./assets/save.svg")
        button.btn.btn-default(title="Load SVG",@click="showImexport('import')")
          img(src="./assets/upload.svg")
        button.btn.btn-default(title="Background Image",@click="showImageModal")
          img(src="./assets/image.svg")
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

  // Canvas
  div(
    ref="canvas",
    v-bind:style="`width: ${width}; height: ${height}`"
  )

  // SVG Import/Export Modal
  .imexport-modal.modal.fade(role='dialog', ref="imexportModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header(v-if='imexport == "import"') Import from SVG
        .modal-header(v-else) Export as SVG
        .modal-body
          textarea.form-control(v-model="svgImExPort", placeholder="SVG here")
          template(v-if="imexport == 'import'")
            .form-group.row
              .col-xs-3
                label(for="svgLoadRelative") Load Relative
              .col-xs-9
                input.form-control(id="svgLoadRelative",type="checkbox",v-model="loadRelative")
            button.form-control.btn.btn-success(@click="loadSvg") Load

  // Background image modal
  .image-modal.modal.fade(role='dialog', ref="imageModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header Set background image
        .modal-body
          input.form-control(format='url', v-model="backgroundImage", placeholder="Image URL")
          button.form-control.btn.btn-success(@click="loadImage") Set background image
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
    loadRelative: false,
    image: null,
    selectedShape: null,
    backgroundImage: null,
  }},
  props: {
    width: {type: Number, default: 600},
    height: {type: Number, default: 400},
    showToolbar: {type: Boolean, default: true},
    showToolbarModes: {type: Boolean, default: true},
    showToolbarModeList: {type: Boolean, default: false},
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
    this.$on('mode-change', (from, to) => {
      this.selectedShape = null
    })
    // this.image.eventShapeModify = () => this.applyStyles()
    // this.image.eventViewboxChange = () => this.applyStyles()
    this.image.eventShapeCreated = () => {
      this.setMode('HoverMult')
      this.applyStyles()
    }
    this.image.eventShapeSelected = (shape) =>{
      this.selectedShape = shape
    }
    this.backgroundImage = this.initialImage
    this.setMode(this.mode)
    this.loadImage()
  },
  methods: {
    dump(...args) { console.log(args) },
    loadImage() {
      this.image.setBackgroundImage(this.backgroundImage, () => {
        this.image.getViewbox().fit(false)
        this.image.getViewbox().setZoomFactorMax(this.zoomFactorMax)
        this.zoomValue = this.image.getViewbox().getZoomValue()
        this.image.draw()
      })
    },
    setMode(mode, ...args) {
      if (mode === 'HoverMult') this.image.setModeHover(true);
      else this.image[`setMode${mode}`](...args);
      this.$emit('mode-change', this.mode, mode)
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
      // this.image.getLayerShape().addShapes(shape)
    },
    removeSelected() {
      if (!this.image.getSelectedShape()) {
        window.alert("Please select a shape")
      } else {
        if (window.confirm("Delete selected shape?")) {
          this.image.removeShape(this.image.getSelectedShape())
          this.setMode(this.initialMode)
        }
      }
    },
    copyShape() {
      const svg = XrxUtils.svgFromShapes(this.image.getSelectedShape())
      XrxUtils.drawFromSvg(svg, this.image)
      this.applyStyles()
    },
    showImexport(imexport) {
      this.imexport = imexport
      this.svgImExPort = (this.imexport === 'import')  
        ? '' 
        : XrxUtils.svgFromDrawing(this.image)
      $(this.$refs.imexportModal).modal('show')
    },
    loadSvg() {
      this.image.getLayerShape().removeShapes();
      XrxUtils.drawFromSvg(this.svgImExPort, this.image, {relative: this.loadRelative})
      this.applyStyles()
      $(this.$refs.imexportModal).modal('hide')
    },
    showImageModal() {
      $(this.$refs.imageModal).modal('show')
    },

  }
}
</script>

<style lang="scss" scoped>
.panel {
  background: transparent;
  .panel-heading {
    padding: 0;
  }
  /* .xrx-toolbar .input-group { display: inline-table !important }*/
  .xrx-toolbar {
    .input-group,
    select,
    .dropdown-toggle,
    button
    {
      height: 32px;
      & > img {
        height: 20px;
      }
      &.btn {
        padding-left: 6px;
        padding-right: 6px;
      }
    }
  }
}
.imexport-modal {
  textarea {
    font-family: monospace;
    min-height: 200px;
  }
}
</style>
