<template lang="pug">
.form-group
  .input-group.btn-group
    span.input-group-addon.hidden-xs.hidden-sm Action
    button.btn.btn-default(title="Select")
      img(src="../assets/cursor.svg")
    button.btn.btn-default(title="Delete")
      img(src="../assets/delete.svg")
</template>

<script>
export default {
  name: 'toolbar-actions',
  props: [],
  data() { return {
  }},
  methods: {
  }
}
</script>

