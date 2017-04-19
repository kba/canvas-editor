<template lang="pug">
#app.container
  img(src="./assets/earth.jpg",style="position:fixed;top:0;left:0")
  .container
    .row
      .col-xs-12
        .form-inline.xrx-toolbar
          toolbar-modes(
            ref="modes",
            @select-mode="dump($event)"
          )
          toolbar-shapes
          toolbar-actions
    .row
      .col-xs-12
        .panel.panel-primary
          .panel-heading Canvas
          xrx-canvas
</template>

<script>
import ToolbarModes   from './components/toolbar-modes.vue'
import ToolbarShapes  from './components/toolbar-shapes.vue'
import ToolbarActions from './components/toolbar-actions.vue'
import XrxCanvas      from './components/xrx-canvas.vue'

export default {
  name: 'app',
  data() { return {
    mode: 'hover-mult'
  }},
  components: {
    ToolbarModes,
    ToolbarShapes,
    ToolbarActions,
    XrxCanvas,
  },
  methods: {
    dump(...args) { console.log(args) }
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
