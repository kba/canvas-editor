<template lang="pug">
.input-group.btn-group
  span.input-group-addon.hidden-sm.hidden-xs Shape
  button.btn.btn-default(title="Polygon",v-on:click="$emit('draw', 'Polygon')")
    img(src="../assets/polygon.svg")
  button.btn.btn-default(title="Rectangle",v-on:click="$emit('draw', 'Rect')")
    img(src="../assets/rectangle.svg")
  button.btn.btn-default(title="Ellipse",v-on:click="$emit('draw', 'Ellipse')")
    img(src="../assets/ellipsis.svg")
  button.btn.btn-default(title="Circle",v-on:click="$emit('draw', 'Circle')")
    img(src="../assets/circle.svg")
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
