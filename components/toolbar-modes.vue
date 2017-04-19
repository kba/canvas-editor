<template lang="pug">
.input-group
  span.input-group-addon.hidden-sm.hidden-xs Mode
  select.form-control(
      @click="select($event.target.value)")
    option(
      v-for="value in modesEnabled",
      v-bind:value="value",
      v-bind:selected="value == mode"
    ) {{ modesAvailable.find(x => x.value == value).text }}
</template>

<script>
export default {
  name: 'toolbar-modes',
  props: {
    initialMode: {type: String, default: 'hover_mult'},
    modesEnabled: {type: Array, default(){return['hover', 'hover_mult', 'move', 'create', 'select']}},
  },
  data() { return {
    mode: this.initialMode,
    modesAvailable: [
      {value: 'hover', text: 'Hover'},
      {value: 'hover_mult', text: 'Hover (multiple)'},
      {value: 'move', text: 'Move'},
      {value: 'create', text: 'Create'},
      {value: 'select', text: 'Select'},
    ]
  }},
  methods: {
    select(mode) {
      this.mode = mode
      this.$emit('select-mode', mode)
    }
  }
}
</script>
