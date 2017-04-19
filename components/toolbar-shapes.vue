<template lang="pug">
.input-group.btn-group
  span.input-group-addon.hidden-sm.hidden-xs Shape
  button.btn.btn-default(title="Polygon")
    img(src="../assets/polygon.svg")
  button.btn.btn-default(title="Rectangle")
    img(src="../assets/rectangle.svg")
  button.btn.btn-default(title="Ellipsis")
    img(src="../assets/ellipsis.svg")
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
