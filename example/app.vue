<template>
  <button @click="dialogVisible = true">Open Dialog</button>
  <button @click="$refs.test.open()">Open Dialog By open()</button>

  <dialog :visible.sync="dialogVisible" v-ref:test>
    <p>This is a dialog</p>
  </dialog>
</template>

<script>
  const Dialog = require('./dialog.vue');

  export default {
    name: 'app',

    components: {
      Dialog
    },

    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>
