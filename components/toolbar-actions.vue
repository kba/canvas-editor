<template lang="pug">
.form-group
  .input-group.btn-group
    span.input-group-addon.hidden-xs.hidden-sm Action
    button.btn.btn-default(title="Select")
      img(src="../assets/cursor.svg")
    button.btn.btn-default(title="Delete")
      img(src="../assets/delete.svg")
    span.dropdown
      button.btn.btn-default.dropdown-toggle(type='button', data-toggle='dropdown')
        | Zoom
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
  name: 'toolbar-shapes',
  props: ['mode'],
  data() { return {
  }},
  methods: {
  }
}
</script>

