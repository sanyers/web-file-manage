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
        <div class="list-nav">
          <hs-breadcrumb
            :data="breadcrumbList"
            @on-item="onItem"></hs-breadcrumb>
          <el-input
            clearable
            v-model="inputName"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            @input="onInput"></el-input>
        </div>
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
// import { debounce } from '@/utils/limit.js';
export default {
  name: 'HsFiles',
  components: { HsBreadcrumb },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    multiple: {
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
      inputName: '',
      oldData: [],
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
      this.$emit('on-selected', []);
    },
    // 单击面包屑
    onItem(item) {
      this.fileItem = item.child.map(i => ({
        ...i,
        selected: false,
      }));
      this.$emit('on-selected', []);
    },
    // 进入文件夹
    clickItem(item) {
      if (item.child) {
        this.breadcrumbList.push(item);
        this.fileItem = item.child.map(i => ({
          ...i,
          selected: false,
        }));
        this.$emit('on-selected', []);
      } else {
        item.selected = !item.selected;
        if (this.multiple) {
          const selectedItem = this.fileItem.filter(i => i.selected);
          this.$emit('on-selected', selectedItem);
        } else {
          this.fileItem.forEach(element => {
            if (element.name !== item.name && element.selected) {
              element.selected = false;
            }
          });
          this.$emit('on-selected', [item]);
        }
      }
    },
    // 进入类型文件夹
    clickTypeItem(item) {
      this.fileItem = item.child.map(i => ({
        ...i,
        selected: false,
      }));
      this.breadcrumbList = [item];
      this.$emit('on-selected', []);
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
    // 全选
    selectAll() {
      if (this.multiple) {
        this.fileItem.forEach(element => {
          !element.child && (element.selected = true);
        });
        const selectedItem = this.fileItem.filter(i => i.selected);
        this.$emit('on-selected', selectedItem);
      }
    },
    // 取消选择
    noSelectAll() {
      this.fileItem.forEach(element => {
        element.selected = false;
      });
      this.$emit('on-selected', []);
    },
    // 搜索
    searchName(name) {
      if (!this.oldData.length) {
        this.oldData = this.fileItem;
      }
      const searchName = name.toLowerCase();
      const searchList = [];
      this.searchAll(
        this.oldData.length ? this.oldData : this.fileItem,
        searchList,
        searchName,
      );
      this.fileItem = searchList;
    },
    // 递归搜索
    searchAll(list, searchList, searchName) {
      list.forEach(element => {
        const foundName = element.name.toLowerCase();
        if (foundName.includes(searchName)) {
          searchList.push(element);
        }
        if (element.child) {
          this.searchAll(element.child, searchList, searchName);
        }
      });
    },
    // 输入框搜索
    onInput(val) {
      if (val) {
        this.searchName(val);
      } else {
        this.fileItem = this.oldData;
        this.oldData = [];
      }
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
  .list-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-input {
      width: 200px;
    }
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
