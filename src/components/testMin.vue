<template>
  <h1>{{ filterContent }}</h1>
</template>
  
<script>
import { filterArray } from "../untils/filterArray.js";
import Mint from "mint-filter";
const mint = new Mint(filterArray);
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      content: "我是敏感信息,我觉得你是个垃1圾",
      filterContent: "",
    };
  },
  mounted() {
    // 基本使用
    this.filterContent = mint.filter(this.content);
    console.log(this.filterContent); // { words: [""], text: "" }
  },
};
</script>
  