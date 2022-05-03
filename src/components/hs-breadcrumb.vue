<template>
  <div class="hs-breadcrumb">
    <span
      class="item el-icon-"
      v-for="(item, index) in data"
      :key="item.name"
      @click="clickItem(item, index)"
      >{{ item.name }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'HsBreadcrumb',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickItem(val, index) {
      if (index !== this.data.length - 1) {
        const deleteCount = this.data.length - index;
        this.data.splice(index + 1, deleteCount);
        this.$emit('on-item', val);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.hs-breadcrumb {
  .item {
    cursor: pointer;
    &:hover {
      color: #39a3fb;
    }
    &::after {
      content: '\e6e0';
      margin: 0 6px;
      cursor: default;
    }
    &:last-child {
      cursor: default;
      &::after {
        content: '';
      }
      &:hover {
        color: #606266;
      }
    }
  }
}
</style>
