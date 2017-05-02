# canvas-editor

> Draw shapes on a canvas using SemToNotes

[**DEMO**](https://kba.github.io/canvas-editor)

<!-- BEGIN-MARKDOWN-TOC -->
* [Build Setup](#build-setup)
* [API](#api)
	* [Properties](#properties)
		* [`width`](#width)
		* [`height`](#height)
		* [`showToolbar`](#showtoolbar)
		* [`showToolbarModes`](#showtoolbarmodes)
		* [`showToolbarModeList`](#showtoolbarmodelist)
		* [`zoomFactorMax`](#zoomfactormax)
		* [`initialZoom`](#initialzoom)
		* [`initialImage`](#initialimage)
		* [`initialMode`](#initialmode)
		* [`xrxStyle`](#xrxstyle)
	* [Events](#events)
		* [`viewbox-changed`](#viewbox-changed)
		* [`shape-modified(shape)`](#shape-modifiedshape)
		* [`shape-created(shape)`](#shape-createdshape)
		* [`shape-selected(shape)`](#shape-selectedshape)
		* [`mode-changed(from, to)`](#mode-changedfrom-to)
	* [Methods](#methods)
		* [`loadImage(img)`](#loadimageimg)
		* [`setMode(mode, ...args)`](#setmodemode-args)
		* [`zoom(amount)`](#zoomamount)
		* [`applyStyles()`](#applystyles)
		* [`drawShape(shapeName)`](#drawshapeshapename)
		* [`removeSelected`](#removeselected)
		* [`copySelected()`](#copyselected)
		* [`showImexport(impexport)`](#showimexportimpexport)
		* [`loadSvg()`](#loadsvg)
		* [`showImageModal()`](#showimagemodal)

<!-- END-MARKDOWN-TOC -->


## Build Setup

```sh
npm install
webpack
```

## API

<!-- BEGIN-RENDER -ip '\* ' ./App.vue -->
### Properties
#### `width`
Width of the canvas (**not** the image). Default: `600`
#### `height`
Height of the canvas (**not** the image). Default: `400`
#### `showToolbar`
Whether to show or hide the complete toolbar. Default: `true`
#### `showToolbarModes`
Whether to show the modes toolbar. Default: `true`
#### `showToolbarModeList`
Whether to show the list of modes. Default: `true`
#### `zoomFactorMax`
Maximum zoom factor. Default: `4`
#### `initialZoom`
Initial zoom. Default: `1` (== 100%)
#### `initialImage`
Initial background image to load.
#### `initialMode`
Initial mode. Default `HoverMult`
#### `xrxStyle`
Styles to use. Default: `[see source]`
### Events

#### `viewbox-changed`
The viewbox (visible layer) has changed.
#### `shape-modified(shape)`
An existing shape `shape` was changed.
#### `shape-created(shape)`
A new shape `shape` was created.
#### `shape-selected(shape)`
A shape `shape` has been selected by the user.
#### `mode-changed(from, to)`
The mode changed, it was `from`, now it is `to`.
### Methods
#### `loadImage(img)`
- `@param String img` URL of the image. Defaults to `this.backgroundImage`
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
#### `showImexport(impexport)`
Show the import/export modal
`imexport` can be one of
- `import` 
- `export`
#### `loadSvg()`
Load the SVG
#### `showImageModal()`
Show the modal that allows changing the image url

<!-- END-RENDER -->
