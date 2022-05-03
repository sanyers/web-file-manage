<template>
  <div class="hs-files">
    <div class="files-nav">
      <p>存储位置：</p>
      <ul class="nav-ul">
        <li
          v-for="(item, index) in data"
          :key="item.url"
          :class="index === filesIndex ? 'active' : ''"
          @click="switchDisk(index)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="files-list">
      <ul class="list-top" v-if="typeList.length">
        <li
          v-for="item in typeList"
          :key="item.name"
          @click="clickTypeItem(item)">
          <i v-if="item.icon" :class="item.icon"></i>
          <svg v-else class="icon" aria-hidden="true">
            <use :xlink:href="item.svg"></use>
          </svg>
          <p>{{ item.name }}</p>
        </li>
      </ul>
      <div class="list-content">
        <hs-breadcrumb :data="breadcrumbList" @on-item="onItem"></hs-breadcrumb>
        <ul class="list-page">
          <li
            v-for="item in fileItem"
            :key="item.name"
            @click="clickItem(item)"
            :class="item.selected ? 'active' : ''">
            <div class="left">
              <i
                v-if="typeIcon(item).icon"
                :class="typeIcon(item).icon + ' file-type'"></i>
              <svg v-else class="icon file-type" aria-hidden="true">
                <use :xlink:href="typeIcon(item).svg"></use>
              </svg>
              <div>
                <p>{{ item.name }}</p>
                <p class="file-time">{{ item.time }}</p>
              </div>
            </div>
            <div class="right" v-if="item.child">
              <span>{{ item.child.length }} 项</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HsBreadcrumb from './hs-breadcrumb.vue';
import { fileTypes } from './file-type-list';
export default {
  name: 'HsFiles',
  components: { HsBreadcrumb },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeList() {
      return this.data.length ? this.data[this.filesIndex].typeList || [] : [];
    },
    typeIcon() {
      return item => {
        return this.getTypeIcon(item);
      };
    },
  },
  data() {
    return {
      filesIndex: 0,
      breadcrumbList: [],
      fileItem: [],
      fileTypes,
    };
  },
  mounted() {
    this.setCrumb();
    this.setFileItem();
  },
  methods: {
    // 切换磁盘
    switchDisk(val) {
      this.filesIndex = val;
      this.setCrumb();
      this.setFileItem();
    },
    // 更改面包屑
    setCrumb() {
      this.breadcrumbList = [this.data[this.filesIndex]];
    },
    // 更改文件列表
    setFileItem() {
      this.fileItem = this.data[this.filesIndex].child.map(i => ({
        ...i,
        selected: false,
      }));
    },
    // 单击面包屑
    onItem(item) {
      this.fileItem = item.child.map(i => ({
        ...i,
        selected: false,
      }));
    },
    // 进入文件夹
    clickItem(item) {
      if (item.child) {
        this.breadcrumbList.push(item);
        this.fileItem = item.child.map(i => ({
          ...i,
          selected: false,
        }));
      } else {
        item.selected = !item.selected;
        const selectedItem = this.fileItem.filter(i => i.selected);
        this.$emit('on-selected', selectedItem);
      }
    },
    // 进入类型文件夹
    clickTypeItem(item) {
      this.fileItem = item.child.map(i => ({
        ...i,
        selected: false,
      }));
      this.breadcrumbList = [item];
    },
    // 获取类型图标
    getTypeIcon(item) {
      let iconName = null;
      if (item.child) {
        return { ...fileTypes.folder };
      }
      const type = '.' + item.name.split('.')[1];
      for (let item in fileTypes) {
        const tmp = fileTypes[item];
        if (tmp.list && tmp.list.includes(type)) {
          iconName = tmp.icon ? { icon: tmp.icon } : { svg: tmp.svg };
        }
      }
      return iconName || { ...fileTypes.fileDefault };
    },
  },
};
</script>
<style lang="scss" scoped>
.hs-files {
  display: flex;
  .files-nav {
    width: 100px;
    .nav-ul {
      margin-top: 14px;
      li {
        padding-left: 14px;
        border-left: 1px solid #fff;
        cursor: pointer;
        margin-bottom: 14px;
      }
      .active {
        color: #39a3fb;
        border-left-color: #39a3fb;
      }
    }
  }
  .files-list {
    width: calc(100% - 100px);
    .list-top {
      display: flex;
      justify-content: space-evenly;
      li {
        text-align: center;
        cursor: pointer;
        .icon {
          font-size: 34px;
          margin-bottom: 6px;
        }
      }
    }
  }
  .breadcrumb {
    margin-left: 12px;
  }
  .list-page {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 12px;
      margin-bottom: 6px;
      cursor: pointer;
      &:hover {
        background-color: #e5e5e5;
      }
      .file-type {
        font-size: 30px;
        margin-right: 14px;
      }
      .left {
        display: flex;
        .file-time {
          color: #a7a7a7;
          font-size: 10px;
        }
      }
      .right {
        color: #a7a7a7;
        display: flex;
        i {
          font-size: 20px;
          margin-left: 8px;
        }
      }
    }
    .active {
      background-color: #dbdbdb;
    }
  }
}
</style>
