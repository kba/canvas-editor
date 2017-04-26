<template lang="pug">
.form-group
  .input-group.btn-group
    span.input-group-addon.hidden-sm.hidden-xs Zoom
    button.btn.btn-default(
      title="Zoom in",
      v-on:click="$emit('zoom', 'in')"
      )
      img(src="../assets/zoom-in.svg")
    button.btn.btn-default(title="Zoom out")
      img(src="../assets/zoom-out.svg")
    span.dropdown
      button.btn.btn-default.dropdown-toggle(type='button', data-toggle='dropdown')
        | {{ zoom }} %
        span.caret
      ul.dropdown-menu
        li
          a(href='#') 100 %
        li
          a(href='#') Fit to canvas
        li
          a(href='#') Fit to width
</template>

<script>
export default {
  name: 'toolbar-zoom',
  props: {
    initialZoom: {type: Number, default: 100},
  },
  data() { return {
    zoom: this.initialZoom
  }},
  methods: {
  }
}
</script>

