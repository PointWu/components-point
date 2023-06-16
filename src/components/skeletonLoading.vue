<template>
  <el-space direction="vertical" alignment="flex-start">
    <el-button @click="setLoading">Click me to reload</el-button>
    <el-skeleton style="width: 240px" :loading="loading" animated :count="3">
      <template #template>
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <div class="box">
          <div class="box-left">
            <img
              src="../assets/point.png"
              style="width: 100px; height: 100px"
            />
          </div>
          <div class="box-right">
            <div>姓名：point</div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </el-space>
</template>
  
<script>
export default {
  name: "",
  props: {},

  data() {
    return {
      loading: true,
      
    };
  },
  mounted(){
    this.loadingData()
  },
  methods:{
    loadingData(){

    }

  }
};
</script>
  
<style scoped>
.box {
  width: 500px;
  height: 300px;
  background-color: aquamarine;
}
.box-left {
  float: left;
  width: 200px;
  height: 100%;
  background-color: yellow;
}

.box-right {
  float: right;
  width: 300px;
  height: 100%;
  background-color: red;
}
</style>