<template>
  <div class="home">
    <el-button @click="showFiles">打开文件管理器</el-button>
    <hs-dialog ref="hsDialogRef" @on-confirm="onConfim" :title="title">
      <hs-files
        ref="hsFilesRef"
        :data="fileList"
        @on-selected="onSelected"
        multiple></hs-files>
      <div slot="footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="onSelectAll">全选</el-button>
        <el-button v-if="selectList.length" type="primary" @click="onOk"
          >确定</el-button
        >
        <span v-if="selectList.length" style="margin-left: 6px"
          >已选择 {{ selectList.length }} 项</span
        >
      </div>
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
      selectList: [],
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
    onSelected(val) {
      this.selectList = val;
    },
    onSelectAll() {
      this.$refs.hsFilesRef.selectAll();
    },
    handleClose() {
      this.$refs.hsFilesRef.noSelectAll();
    },
    onOk() {},
  },
};
</script>
