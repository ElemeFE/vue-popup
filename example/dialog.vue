<template>
  <div class="dialog"
    v-if="rendered"
    v-show="visible"
    transition="dialog-fade">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .dialog {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 90%;
  }

  .dialog-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }

  .dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .dialog-fade-enter,
  .dialog-fade-leave {
    opacity: 0;
  }
</style>

<script type="text/ecmascript-6" lang="babel">
  import Popup from '../src/index';
  require('../src/popup.css');

  export default {
    mixins: [Popup],

    props: {
      showClose: {
        type: Boolean,
        default: true
      },
      showModal: {
        type: Boolean,
        default: true
      },
      modal: {
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      title: String
    },

    methods: {
      willOpen() {
        console.log('will open...');
        return true;
      }
    }
  };
</script>
