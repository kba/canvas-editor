# canvas-editor

> Draw shapes on a canvas using SemToNotes

[**DEMO**](https://kba.github.io/canvas-editor)

<!-- BEGIN-MARKDOWN-TOC -->
* [Build Setup](#build-setup)
* [API](#api)
	* [Properties](#properties)
		* [`width`](#width)
		* [`height`](#height)
		* [`enable-thumb`](#enable-thumb)
		* [`thumb-width`](#thumb-width)
		* [`thumb-background`](#thumb-background)
		* [`thumb-height`](#thumb-height)
		* [`thumb-timeout`](#thumb-timeout)
		* [`show-toolbar`](#show-toolbar)
		* [`show-toolbar-modes`](#show-toolbar-modes)
		* [`show-toolbar-mode-list`](#show-toolbar-mode-list)
		* [`show-toolbar-modes`](#show-toolbar-modes-1)
		* [`show-toolbar-shapes`](#show-toolbar-shapes)
		* [`show-toolbar-file`](#show-toolbar-file)
		* [`show-toolbar-zoom`](#show-toolbar-zoom)
		* [`show-toolbar-rotate`](#show-toolbar-rotate)
		* [`zoom-factor-max`](#zoom-factor-max)
		* [`initial-zoom`](#initial-zoom)
		* [`initial-svg`](#initial-svg)
		* [`initial-image`](#initial-image)
		* [`initia-mode`](#initia-mode)
		* [`xrx-style`](#xrx-style)
		* [`thumb-xrx-style`](#thumb-xrx-style)
	* [Events](#events)
		* [`viewbox-changed`](#viewbox-changed)
		* [`shape-modified(shape)`](#shape-modifiedshape)
		* [`shape-created(shape)`](#shape-createdshape)
		* [`shape-selected(shape)`](#shape-selectedshape)
		* [`shape-activated(shape)`](#shape-activatedshape)
		* [`shape-hover-in(shape)`](#shape-hover-inshape)
		* [`shape-hover-out(shape)`](#shape-hover-outshape)
		* [`mode-changed(from, to)`](#mode-changedfrom-to)
		* [`svg-changed(svg)`](#svg-changedsvg)
		* [`zoom-changed(now, before)`](#zoom-changednow-before)
	* [Methods](#methods)
		* [`loadImage(img)`](#loadimageimg)
		* [`setMode(mode, ...args)`](#setmodemode-args)
		* [`zoom(amount)`](#zoomamount)
		* [`rotate(amount)`](#rotateamount)
		* [`applyStyles()`](#applystyles)
		* [`drawShape(shapeName)`](#drawshapeshapename)
		* [`removeSelected`](#removeselected)
		* [`copySelected()`](#copyselected)
		* [`showImport()`](#showimport)
		* [`showExport()`](#showexport)
		* [`loadSvg(svg)`](#loadsvgsvg)
		* [`exportSvg()`](#exportsvg)
		* [`showImageModal()`](#showimagemodal)
		* [`showThumb()`](#showthumb)

<!-- END-MARKDOWN-TOC -->


## Build Setup

```sh
npm install
webpack
```

## API

<!-- BEGIN-RENDER -ip '\*[^/]' ./App.vue -->
### Properties

#### `width`
Width of the canvas (**not** the image). Default: `600`

#### `height`
Height of the canvas (**not** the image). Default: `400`

#### `enable-thumb`
Whether the thumb navigation is enabled. Defaut: `true`

#### `thumb-width`
Width of the nav thumb (**not** the thumbnail image). Default: `120`

#### `thumb-background`
Fixed thumbnail image. Default: `''` (none, use current canvas image)

#### `thumb-height`
Height of the nav thumb (**not** the thumbnail image). Default: `120`

#### `thumb-timeout`
Time in ms after which to hide the thumb. Default: `1000`

#### `show-toolbar`
Whether to show or hide the complete toolbar. Default: `true`

#### `show-toolbar-modes`
Whether to show the modes toolbar. Default: `true`

#### `show-toolbar-mode-list`
Whether to show the list of modes. Default: `false`

#### `show-toolbar-modes`
Whether to show the modes toolbar. Default: `true`

#### `show-toolbar-shapes`
Whether to show the shapes toolbar. Default: `true`

#### `show-toolbar-file`
Whether to show the file toolbar. Default: `true`

#### `show-toolbar-zoom`
Whether to show the zoom toolbar. Default: `true`

#### `show-toolbar-rotate`
Whether to show the rotate toolbar. Default: `true`

#### `zoom-factor-max`
Maximum zoom factor. Default: `4`

#### `initial-zoom`
Initial zoom. Default: `1` (== 100%)

#### `initial-svg`
Initial SVG value

#### `initial-image`
Initial background image to load.

#### `initia-mode`
Initial mode. Default `HoverMult`

#### `xrx-style`
Styles to use for shapes in image. Default: `[see source]`

#### `thumb-xrx-style`
Styles to use for thumb shapes. Default: `{}`

### Events

#### `viewbox-changed`
The viewbox (visible layer) has changed.

#### `shape-modified(shape)`
An existing shape `shape` was changed.

#### `shape-created(shape)`
A new shape `shape` was created.

#### `shape-selected(shape)`
A shape `shape` has been selected by the user.

#### `shape-activated(shape)`
Shape `shape` is modifiable and has been activated

#### `shape-hover-in(shape)`
`mouseenter` on the `shape`.

#### `shape-hover-out(shape)`
`mouseleave` on the `shape`.

#### `mode-changed(from, to)`
The mode changed, it was `from`, now it is `to`.

#### `svg-changed(svg)`
The SVG changed to `svg`

#### `zoom-changed(now, before)`
Zoom value changed from `before` to `now`


### Methods

#### `loadImage(img)`
- `@param String img` URL of the image. Defaults to `this.imageBackground`
  which defaults to [`initialImage`](#initialimage)

#### `setMode(mode, ...args)`
Sets the mode, passing further args to `setXXXMode`

#### `zoom(amount)`

Change the zoom level of the viewbox.

`amount` can be
- `in` to zoom in
- `out` to zoom out
- `fit` to make the image fit the canvas
- `width` to make the image width fit the canvas
- `height` to make the image height fit the canvas
- a number between `0` and [`zoomFactorMax`](#zoomfactormax) to zoom to that value

#### `rotate(amount)`

Rotate the canvas `Left` or `Right`.

#### `applyStyles()`

Apply the defined style to all the shapes

#### `drawShape(shapeName)`

`shapeName` can be one of:
- `Polygon`
- `Polyline`
- `Line`
- `Rect`
- `Circle`
- `Ellipse`

#### `removeSelected`

Remove the currently selected shape

#### `copySelected()`

Copy the currently selected shape

#### `showImport()`

Show the import modal

#### `showExport()`

Show the export modal

#### `loadSvg(svg)`

Load the SVG

#### `exportSvg()`

Export the SVG

#### `showImageModal()`

Show the modal that allows changing the image url

#### `showThumb()`

Show the navigation thumbnail and hide it again after
[`thumbTimeout`](#thumbtimeout)

<!-- END-RENDER -->
