<template>
  <div style="display: flex; align-items: center">
    <span v-if="leftmostPage > PAGE_PER_SECTION">
      <a @click="previousPage">&lt;</a>
    </span>
    <span class="page" v-for="page in getPaginationArray(leftmostPage)" :key="page">
      <a :class="{ on: page === curPage }" @click="onChangeCurPage(page)">
        {{ page }}
      </a>
    </span>
    <span v-if="leftmostPage + PAGE_PER_SECTION <= totalPage">
      <a @click="nextPage">&gt;</a>
    </span>
  </div>
  <p>totalArticles : {{ list.length }}</p>
  <p>totalPage : {{ totalPage }}</p>
  <p>leftmostPage : {{ leftmostPage }}</p>
  <p>ITEM_PER_PAGE : {{ ITEM_PER_PAGE }}</p>
  <p>PAGE_PER_SECTION : {{ PAGE_PER_SECTION }}</p>
</template>

<script>
export default {
  props: {
    list: Array,
    ITEM_PER_PAGE: Number,
    PAGE_PER_SECTION: Number,
  },
  methods: {
    getPaginationArray(left) {
      const res = [];
      const totalPage = Math.ceil(this.list.length / (this.ITEM_PER_PAGE || 1));
      for (let i = left; i < Math.min(totalPage + 1, left + this.PAGE_PER_SECTION); i++) {
        res.push(i);
      }
      return res;
    },
    onChangeCurPage(page) {
      this.$emit('change-page', page);
    },
    previousPage() {
      this.leftmostPage -= this.PAGE_PER_SECTION;
      this.onChangeCurPage(this.leftmostPage);
    },
    nextPage() {
      this.leftmostPage += this.PAGE_PER_SECTION;
      this.onChangeCurPage(this.leftmostPage);
    },
  },
  data() {
    return {
      leftmostPage: 1,
      curPage: 1,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.list.length / (this.ITEM_PER_PAGE || 1));
    },
  },
};
</script>

<style>
.page {
  padding: 1rem;
  cursor: pointer;
}
.page a.on {
  font-weight: 900;
  color: red;
}
</style>