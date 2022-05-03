<template>
  <el-dialog
    class="hs-dialog"
    v-bind="$attrs"
    v-on="$listeners"
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    :close-on-click-modal="isModalClose"
    :title="title">
    <div v-if="$slots.title" slot="title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
    <slot name="footer" v-if="$slots.footer" slot="footer"></slot>
    <span v-else-if="isFooter" slot="footer" class="dialog-footer">
      <el-button v-if="isCancel" @click="handleClose">{{
        cancelText
      }}</el-button>
      <el-button
        v-if="isOk"
        type="primary"
        @click="onOk"
        :loading="okLoading"
        >{{ okText }}</el-button
      >
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'HsDialog',
  props: {
    // 标题
    title: {
      type: String,
      default: '提示',
    },
    // 取消按钮文字
    cancelText: {
      type: String,
      default: '取消',
    },
    // 确定按钮文字
    okText: {
      type: String,
      default: '确定',
    },
    // 是否显示底部按钮
    isFooter: {
      type: Boolean,
      default: true,
    },
    // 是否显示取消按钮
    isCancel: {
      type: Boolean,
      default: true,
    },
    // 是否显示确定按钮
    isOk: {
      type: Boolean,
      default: true,
    },
    // 是否通过点击 modal 层关闭弹框
    isModalClose: {
      type: Boolean,
      default: false,
    },
    // 确定按钮 loading 状态
    okLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    hide() {
      this.dialogVisible = false;
    },
    onOk() {
      this.$emit('on-confirm');
    },
    handleClose() {
      this.hide();
      this.$emit('handle-close');
    },
  },
};
</script>
<style lang="scss" scoped>
.hs-dialog {
  ::v-deep .el-dialog__header {
    background-color: #39a3fb;
    .el-dialog__title {
      color: #fff;
      font-size: 14px;
    }
    .el-dialog__close {
      color: #fff;
      font-size: 16px;
    }
  }
  ::v-deep .el-dialog__body {
    padding: 30px 40px;
  }
  ::v-deep .el-dialog__footer {
    background-color: #a5b0b610;
    padding: 10px 0;
    text-align: center;
  }
}
</style>
