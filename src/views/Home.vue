<template>
  <div class="home">
    <el-button @click="showFiles">打开文件管理器</el-button>
    <hs-dialog ref="hsDialogRef" @on-confirm="onConfim" :title="title">
      <hs-files :data="fileList"></hs-files>
    </hs-dialog>
  </div>
</template>

<script>
import HsDialog from '@/components/hs-dialog.vue';
import HsFiles from '@/components/hs-files.vue';
import { fileList } from './home-fields';
export default {
  name: 'home',
  components: {
    HsDialog,
    HsFiles,
  },
  data() {
    return {
      title: '文件管理',
      fileList,
    };
  },
  // mounted() {
  //   console.log(this.fields);
  // },
  methods: {
    showFiles() {
      this.$refs.hsDialogRef.show();
    },
    onConfim() {
      this.$refs.hsDialogRef.hide();
    },
  },
};
</script>
