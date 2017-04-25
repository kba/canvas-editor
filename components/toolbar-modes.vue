<template lang="pug">
.input-group
  span.input-group-addon.hidden-sm.hidden-xs Mode
  select.form-control(
      @click="$emit('select-mode', $event.target.value)")
    option(
      v-for="value in modesEnabled",
      v-bind:value="value",
      v-bind:selected="value == $parent.mode"
    ) {{ modesAvailable.find(x => x.value == value).text }}
</template>

<script>
export default {
  name: 'toolbar-modes',
  props: {
    initialMode: {type: String, default: 'HoverMult'},
    modesEnabled: {type: Array, default(){return['Hover', 'HoverMult', 'Move', 'Create', 'Select']}},
  },
  data() { return {
    mode: this.initialMode,
    modesAvailable: [
      {value: 'Hover', text: 'Hover'},
      {value: 'HoverMult', text: 'Hover (multiple)'},
      {value: 'Move', text: 'Move'},
      {value: 'Create', text: 'Create'},
      {value: 'Select', text: 'Select'},
    ]
  }},
}
</script>
