<template lang="pug">
.panel.panel-default
  .panel-heading(v-if="showToolbar")
    .form-inline.xrx-toolbar
      .input-group(v-if="showToolbarModes")
        span.input-group-addon.hidden-sm.hidden-xs.hidden-md Mode
        button(title="Hover",@click="setMode('HoverMult')",v-bind:class="`btn btn-default ${!!mode.match(/^Hover/)?'active':''}`")
          img(src="./assets/hand.svg")
        button(@click="setMode('Modify')",title="Modify",v-bind:class="`btn btn-default ${mode === 'Modify'?'active':''}`")
          img(src="./assets/hand-point.svg")
        button(@click="setMode('Select')",title="Select",v-bind:class="`btn btn-default ${mode === 'Select'?'active':''}`")
          img(src="./assets/cursor.svg")
        select.form-control(
          @click="setMode($event.target.value)",
          v-if="showToolbarModesList",
          style="width: inherit"
          )
          option(
            v-for="value in modesEnabled",
            v-bind:value="value",
            v-bind:disabled="modesAvailable.find(x => x.value == value).disabled"
            v-bind:selected="value == mode"
          ) {{ modesAvailable.find(x => x.value == value).text }}
      .input-group.btn-group(v-if="mode === 'Select'")
        span.input-group-addon.hidden-xs.hidden-sm.hidden-md Action
        button.btn.btn-default(title="Copy",@click="copySelected",v-bind:disabled="!selectedShape")
          img(src="./assets/copy.svg")
        button.btn.btn-default(title="Remove",@click="removeSelected",v-bind:disabled="!selectedShape")
          img(src="./assets/remove.svg")
      .input-group.btn-group(v-if="showToolbarShapes")
        span.input-group-addon.hidden-xs.hidden-sm.hidden-md Shape
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
      .input-group(v-if="showToolbarFile")
        span.input-group-addon.hidden-xs.hidden-sm.hidden-md File
        button.btn.btn-default(title="Save SVG",@click="showExport")
          img(src="./assets/save.svg")
        button.btn.btn-default(title="Load SVG",@click="showImport")
          img(src="./assets/upload.svg")
        button.btn.btn-default(title="Background Image",@click="showImageModal")
          img(src="./assets/image.svg")
      .input-group.btn-group(v-if="showToolbarZoom")
        span.input-group-addon.hidden-xs.hidden-sm.hidden-md Zoom
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
              a(href='#',@click="zoom('height')") Fit to height
      .input-group.btn-group(v-if="showToolbarRotate")
        span.input-group-addon.hidden-sm.hidden-xs.hidden-md Rotate
        button.btn.btn-default(title="Rotate right",@click="rotate('Left')")
          img(src="./assets/rotate-right.svg")
        button.btn.btn-default(title="Rotate left",@click="rotate('Right')")
          img(src="./assets/rotate-left.svg")

  // Canvas
  div(style="position: relative")
    div(
      ref="image"
      v-bind:style="`width: ${width}; height: ${height}`")
    div(
      ref="thumb"
      v-bind:class="{thumb, 'fade-out':!thumbVisible}"
      v-bind:style="thumbStyle")

  // SVG Import Modal
  .import-modal.modal.fade(role='dialog', ref="importModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header Import from SVG
        .modal-body
          textarea.form-control(v-model="svgImport", placeholder="SVG here")
          template
            button.form-control.btn.btn-success(@click="loadSvg") Load

  // SVG Export Modal
  .export-modal.modal.fade(role='dialog', ref="exportModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header Export as SVG
        .modal-body
          textarea.form-control(v-model="svgExport", placeholder="SVG here", readonly)

  // Background image modal
  .image-modal.modal.fade(role='dialog', ref="imageModal", tabindex=-1)
    .modal-dialog
      .modal-content
        .modal-header Set background image
        .modal-body
          input.form-control(format='url', v-model="imageBackground", placeholder="Image URL")
          button.form-control.btn.btn-success(@click="loadImage(this.imageBackground)") Set background image
</template>

<script>
import XrxUtils from 'semtonotes-utils'
var thumbHideTimeoutId = null

export default {

  name: 'xrx-vue',

  data() { return {
    mode: this.initialMode,
    svgExport: '',
    svgImport: '',
    zoomValue: this.initialZoom,
    image: null,
    selectedShape: null,
    thumbVisible: false,
    imageBackground: null,
  }},

  /**
   * ### Properties
   *
   */
  props: {

    /**
     * 
     * #### `width`
     * Width of the canvas (**not** the image). Default: `600`
     * 
     * #### `height`
     * Height of the canvas (**not** the image). Default: `400`
     */
    width:  {type: Number, default: 600},
    height: {type: Number, default: 400},

    /**
     * 
     * #### `enable-thumb`
     * Whether the thumb navigation is enabled. Defaut: `true`
     * 
     * #### `thumbWidth`
     * Width of the nav thumb (**not** the thumbnail image). Default: `120`
     * 
     * #### `thumbBackground`
     * Fixed thumbnail image. Default: `''` (none, use current canvas image)
     * 
     * #### `thumbHeight`
     * Height of the nav thumb (**not** the thumbnail image). Default: `120`
     * 
     * #### `thumbTimeout`
     * Time in ms after which to hide the thumb. Default: `1000`
     */

    enableThumb:     {type: Boolean, default: true},
    thumbBackground: {type: String, default: ''},
    thumbWidth:      {type: Number, default: 120},
    thumbHeight:     {type: Number, default: 120},
    thumbTimeout:    {type: Number, default: 1000},

    /**
     * 
     * #### `show-toolbar`
     * Whether to show or hide the complete toolbar. Default: `true`
     * 
     * #### `show-toolbar-modes`
     * Whether to show the modes toolbar. Default: `true`
     * 
     * #### `show-toolbar-mode-list`
     * Whether to show the list of modes. Default: `false`
     * 
     * #### `show-toolbar-modes`
     * Whether to show the modes toolbar. Default: `true`
     * 
     * #### `show-toolbar-shapes`
     * Whether to show the shapes toolbar. Default: `true`
     * 
     * #### `show-toolbar-file`
     * Whether to show the file toolbar. Default: `true`
     * 
     * #### `show-toolbar-zoom`
     * Whether to show the zoom toolbar. Default: `true`
     * 
     * #### `show-toolbar-rotate`
     * Whether to show the rotate toolbar. Default: `true`
     */
    showToolbar:          {type: Boolean, default: true},
    showToolbarModes:     {type: Boolean, default: true},
    showToolbarModesList: {type: Boolean, default: false},
    showToolbarShapes:    {type: Boolean, default: true},
    showToolbarFile:      {type: Boolean, default: true},
    showToolbarZoom:      {type: Boolean, default: true},
    showToolbarRotate:    {type: Boolean, default: true},

    /**
     * 
     * #### `zoomFactorMax`
     * Maximum zoom factor. Default: `4`
     * 
     * #### `initialZoom`
     * Initial zoom. Default: `1` (== 100%)
     */
    zoomFactorMax: {type: Number, default: 4},
    initialZoom: {type: Number, default: 1},

    /**
     * 
     * #### `initialSvg`
     * Initial SVG value
     */
    initialSvg: {type: String},

    /**
     * 
     * #### `initialImageBackground`
     * Initial background image to load.
     */
    initialImageBackground: {type: String, default: './assets/earth.jpg', required: true},

    /**
     * 
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
     * 
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
   * 
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
   * #### `shape-activated(shape)`
   * Shape `shape` is modifiable and has been activated
   * 
   * #### `shape-hover-in(shape)`
   * `mouseenter` on the `shape`.
   * 
   * #### `shape-hover-out(shape)`
   * `mouseleave` on the `shape`.
   * 
   * #### `mode-changed(from, to)`
   * The mode changed, it was `from`, now it is `to`.
   * 
   * #### `svg-changed(svg)`
   * The SVG changed to `svg`
   * 
   * #### `zoom-changed(now, before)`
   * Zoom value changed from `before` to `now`
   * 
   */
  mounted() {
    this._initCanvas()

    if (this.enableThumb) this._initThumb()

    this.loadImage()
  },

  computed: {
    imageDiv() { return this.$refs.image },
    thumbDiv() { return this.$refs.thumb },
    thumbStyle() {
      return `
        width: ${this.thumbWidth}px;
        height: ${this.thumbHeight}px;
        `.replace(/\n/g, '')
    }
  },

  /**
   * 
   * ### Methods
   */
  methods: {

    _initThumb() {
      this.thumb = XrxUtils.createDrawing(this.thumbDiv, this.thumbWidth, this.thumbHeight)
      this.$on('rotate', (amount) => this.thumb.getViewbox()[`rotate${amount}`]())
      this.$on('load-image', (img, thumbBackground) => {
        thumbBackground = thumbBackground || this.thumbBackground || this.imageBackground
        console.log({thumbBackground})
        this.thumb.setBackgroundImage(thumbBackground, () => {
          this.thumb.getViewbox().fit()
          this.thumb.draw()
        })
      })
      this.$on('viewbox-changed', () => {
        XrxUtils.navigationThumb(this.thumb, this.image)
        this.showThumb()
      })

      this.thumbDiv.addEventListener('mouseenter', () => this.thumbDiv.classList.add('invisible'))
      let thumbShowTimeoutId = null
      // TODO
      this.thumbImage = this.imageBackground
      this.thumbDiv.addEventListener('mouseleave', () => {
        clearTimeout(thumbShowTimeoutId)
        thumbShowTimeoutId = setTimeout(() => {
          this.thumbDiv.classList.remove('invisible')
        }, 1000)
      })
    },

    _initCanvas() {
      this.image = XrxUtils.createDrawing(this.imageDiv, this.width, this.height)
      this.$on('rotate', (amount) => this.image.getViewbox()[`rotate${amount}`]())
      this.$on('load-image', (img) => {
        img = img || this.imageBackground
        this.image.setBackgroundImage(img, () => {
          this.svgImport = this.svgExport
          this.loadSvg()
          this.image.getViewbox().fit(true)
          this.image.draw()
        })
      })
      this.image.eventViewboxChange   = () => this.$emit('viewbox-changed')
      this.image.eventShapeModify     = (shape) => this.$emit('shape-modified', shape)
      this.image.eventShapeActivated  = (shape) => this.$emit('shape-activated', shape)
      this.image.eventShapeCreated    = (shape) => this.$emit('shape-created', shape)
      this.image.eventShapeSelected   = (shape) => this.$emit('shape-selected', shape)
      this.image.eventShapeUnselected = (shape) => this.$emit('shape-unselected', shape)
      this.image.eventShapeHoverIn    = (shape) => this.$emit('shape-hover-in', shape)
      this.image.eventShapeHoverOut   = (shape) => this.$emit('shape-hover-out', shape)
      this.$watch(() => this.svgExport, (svg) => this.$emit('svg-changed', svg))
      this.$watch(() => this.zoomValue, (...args) => this.$emit('zoom-changed', ...args))
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
      this.$on('viewbox-changed', () => {
        this.zoomValue = this.image.getViewbox().getZoomValue()
      })

      this.image.getViewbox().setZoomFactorMax(this.zoomFactorMax)
      this.imageBackground = this.initialImageBackground
      if (this.initialSvg) this.svgExport = this.initialSvg
      this.setMode(this.mode)
    },


    /**
     * 
     * #### `loadImage(img)`
     * - `@param String img` URL of the image. Defaults to `this.imageBackground`
     *   which defaults to [`initialImageBackground`](#initialimage)
     */
    loadImage(img, thumb) {
      if (img) this.imageBackground = img
      this.$emit('load-image', img, thumb)
    },

    /**
     * 
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
     * 
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
     * 
     * #### `rotate(amount)`
     * 
     * Rotate the canvas `Left` or `Right`.
     */
    rotate(...args) {
      this.$emit('rotate', ...args)
    },

    /**
     * 
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
     * 
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
    },

    /**
     * 
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
     * 
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
     * 
     * #### `showImport()`
     * 
     * Show the import modal
     */
    showImport() {
      this.svgImport = ''
      $(this.$refs.importModal).modal('show')
    },

    /**
     * 
     * #### `showExport()`
     * 
     * Show the export modal
     */
    showExport() {
      $(this.$refs.exportModal).one('shown.bs.modal', () => {
        this.$refs.exportModal.querySelector('textarea').select()
      })
      $(this.$refs.exportModal).modal('show')
    },

    /**
     * 
     * #### `loadSvg()`
     * 
     * Load the SVG
     */
    loadSvg() {
      this.image.getLayerShape().removeShapes();
      XrxUtils.drawFromSvg(this.svgImport, this.image, {relative: true})
      this.applyStyles()
      $(this.$refs.importModal).modal('hide')
    },

    /**
     * 
     * #### `showImageModal()`
     * 
     * Show the modal that allows changing the image url
     */
    showImageModal() {
      $(this.$refs.imageModal).modal('show')
    },

    showThumb() {
      this.thumbVisible = true;
      clearTimeout(thumbHideTimeoutId)
      thumbHideTimeoutId = setTimeout(() => this.thumbVisible = false, this.thumbTimeout)
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
  .thumb {
    position: absolute;
    z-index: 999;
    top: 2px;
    left: 2px;
    border: 1px solid #404040;
    background: rgba(255,255,255,0.8);
    &.fade-out,
    &.fade-out *,
    {
      transition: all 500ms;
      z-index: -1000;
      opacity: 0;
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
