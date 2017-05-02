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
        button.btn.btn-default(title="Copy",@click="copySelected",v-bind:disabled="!selectedShape")
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
        button.btn.btn-default(title="Save SVG",@click="showExport")
          img(src="./assets/save.svg")
        button.btn.btn-default(title="Load SVG",@click="showImport")
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

  // SVG Import Modal
  .import-modal.modal.fade(role='dialog', ref="importModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header Import from SVG
        .modal-body
          textarea.form-control(v-model="svgImport", placeholder="SVG here")
          template
            .form-group.row
              .col-xs-3
                label(for="svgLoadRelative") Load Relative
              .col-xs-9
                input.form-control(id="svgLoadRelative",type="checkbox",v-model="loadRelative")
            button.form-control.btn.btn-success(@click="loadSvg") Load

  // SVG Export Modal
  .export-modal.modal.fade(role='dialog', ref="exportModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header Export as SVG
        .modal-body
          textarea.form-control(v-model="svgExport", placeholder="SVG here")

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
import XrxUtils from 'semtonotes-utils'


export default {
  name: 'xrx-vue',
  data() { return {
    mode: this.initialMode,
    svgExport: '',
    svgImport: '',
    zoomValue: this.initialZoom,
    loadRelative: false,
    image: null,
    selectedShape: null,
    backgroundImage: null,
  }},
  /*
   * ### Properties
   *
   */
  props: {

    /**
     * #### `width`
     * Width of the canvas (**not** the image). Default: `600`
     */
    width: {type: Number, default: 600},

    /**
     * #### `height`
     * Height of the canvas (**not** the image). Default: `400`
     */
    height: {type: Number, default: 400},

    /**
     * #### `showToolbar`
     * Whether to show or hide the complete toolbar. Default: `true`
     */
    showToolbar: {type: Boolean, default: true},

    /**
     * #### `showToolbarModes`
     * Whether to show the modes toolbar. Default: `true`
     */
    showToolbarModes: {type: Boolean, default: true},

    /**
     * #### `showToolbarModeList`
     * Whether to show the list of modes. Default: `true`
     */
    showToolbarModeList: {type: Boolean, default: false},

    /**
     * #### `zoomFactorMax`
     * Maximum zoom factor. Default: `4`
     */
    zoomFactorMax: {type: Number, default: 4},

    /**
     * #### `initialSvg`
     * Initial SVG value
     */
    initialSvg: {type: String},

    /**
     * #### `initialZoom`
     * Initial zoom. Default: `1` (== 100%)
     */
    initialZoom: {type: Number, default: 1},

    /**
     * #### `initialImage`
     * Initial background image to load.
     */
    initialImage: {type: String, default: './assets/earth.jpg', required: true},

    /**
     * #### `initialMode`
     * Initial mode. Default `HoverMult`
     */
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

    /**
     * #### `xrxStyle`
     * Styles to use. Default: `[see source]`
     */
    xrxStyle: {type: Object, default() { return {
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

  /**
   * ### Events
   * 
   * #### `viewbox-changed`
   * The viewbox (visible layer) has changed.
   *
   * #### `shape-modified(shape)`
   * An existing shape `shape` was changed.
   *
   * #### `shape-created(shape)`
   * A new shape `shape` was created.
   *
   * #### `shape-selected(shape)`
   * A shape `shape` has been selected by the user.
   *
   * #### `mode-changed(from, to)`
   * The mode changed, it was `from`, now it is `to`.
   *
   * #### `svg-changed(svg)`
   * The SVG changed to `svg`
   *
   */
  mounted() {
    this.image = XrxUtils.createDrawing(this.$refs.canvas, this.width, this.height)
    if (this.initialSvg)
      XrxUtils.drawFromSvg(this.initialSvg, this.image)
    this.image.eventViewboxChange = () => this.$emit('viewbox-changed')
    this.image.eventShapeModify = (shape) => this.$emit('shape-modified', shape)
    this.image.eventShapeCreated = (shape) => this.$emit('shape-created', shape)
    this.image.eventShapeSelected = (shape) => this.$emit('shape-selected', shape)

    this.$on('shape-selected', (shape) => {
      this.selectedShape = shape
    })
    this.$on('shape-modified', (shape) => {
      this.svgExport = XrxUtils.svgFromDrawing(this.image)
    })
    this.$on('shape-created', (shape) => {
      this.setMode('HoverMult')
      this.applyStyles()
      this.svgExport = XrxUtils.svgFromDrawing(this.image)
      document.activeElement.blur()
    })
    this.$on('mode-changed', (from, to) => {
      this.selectedShape = null
    })
    this.$watch(() => this.svgExport, (svg) => this.$emit('svg-changed', svg))

    this.backgroundImage = this.initialImage
    this.loadImage()
    this.setMode(this.mode)
  },

  /**
   * ### Methods
   */
  methods: {

    /**
     * #### `loadImage(img)`
     * - `@param String img` URL of the image. Defaults to `this.backgroundImage`
     *   which defaults to [`initialImage`](#initialimage)
     */
    loadImage(img) {
      if (img) this.backgroundImage = img
      this.image.setBackgroundImage(this.backgroundImage, () => {
        this.image.getViewbox().fit(false)
        this.image.getViewbox().setZoomFactorMax(this.zoomFactorMax)
        this.zoomValue = this.image.getViewbox().getZoomValue()
        this.image.draw()
      })
    },

    /**
     * #### `setMode(mode, ...args)`
     *
     * Sets the mode, passing further args to `setXXXMode`
     */
    setMode(mode, ...args) {
      if (mode === 'HoverMult') this.image.setModeHover(true);
      else this.image[`setMode${mode}`](...args);
      this.$emit('mode-changed', this.mode, mode)
      this.mode = mode
    },

    /**
     * #### `zoom(amount)`
     *
     * Change the zoom level of the viewbox.
     *
     * `amount` can be
     * - `in` to zoom in
     * - `out` to zoom out
     * - `fit` to make the image fit the canvas
     * - `width` to make the image width fit the canvas
     * - `height` to make the image height fit the canvas
     * - a number between `0` and [`zoomFactorMax`](#zoomfactormax) to zoom to that value
     */
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

    /**
     * #### `applyStyles()`
     *
     * Apply the defined style to all the shapes
     */
    applyStyles() {
      this.image.getLayerShape().getShapes().forEach(shape => {
        XrxUtils.applyStyle(shape, this.xrxStyle)
      })
    },

    /**
     * #### `drawShape(shapeName)`
     *
     * `shapeName` can be one of:
     * - `Polygon`
     * - `Polyline`
     * - `Line`
     * - `Rect`
     * - `Circle`
     * - `Ellipse`
     */
    drawShape(shapeName) {
      const shape = new xrx.shape[shapeName](this.image)
      XrxUtils.applyStyle(shape, this.xrxStyle)
      this.setMode('Create', shape.getCreatable())
      // this.image.getLayerShape().addShapes(shape)
    },

    /**
     * #### `removeSelected`
     *
     * Remove the currently selected shape
     */
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

    /**
     * #### `copySelected()`
     *
     * Copy the currently selected shape
     */
    copySelected() {
      const svg = XrxUtils.svgFromShapes(this.image.getSelectedShape())
      XrxUtils.drawFromSvg(svg, this.image)
      this.applyStyles()
    },

    /**
     * #### `showImport()`
     *
     * Show the import modal
     */
    showImport() {
      this.svgImport = ''
      $(this.$refs.importModal).modal('show')
    },

    /**
     * #### `showExport()`
     *
     * Show the export modal
     */
    showExport() {
      $(this.$refs.exportModal).modal('show')
    },

    /**
     * #### `loadSvg()`
     *
     * Load the SVG
     */
    loadSvg() {
      this.image.getLayerShape().removeShapes();
      XrxUtils.drawFromSvg(this.svgImport, this.image, {relative: this.loadRelative})
      this.applyStyles()
      $(this.$refs.importModal).modal('hide')
    },

    /**
     * #### `showImageModal()`
     *
     * Show the modal that allows changing the image url
     */
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
.export-modal,
.import-modal {
  textarea {
    font-family: monospace;
    min-height: 200px;
  }
}
</style>
