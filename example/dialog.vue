<template>
  <div class="dialog"
    v-if="rendered"
    v-show="visible"
    transition="dialog-fade"
    :class="{ showclose: showClose }">
    <div class="dialog-content">
      <slot></slot>
    </div>
    <div class="dialog-close" @click="close()" v-if="showClose"></div>
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

  .dialog.showclose {
    padding-bottom: 40px;
  }

  .dialog-close {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    height: 35px;
    width: 35px;
    line-height: 35px;
    text-align: center;
    background-size: cover;
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
