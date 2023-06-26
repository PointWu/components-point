<template>
  <div>
    <div class="wrap">
      <h4>内容较多时</h4>
      <div class="section">
        <input class="content-check" type="checkbox" id="c1" hidden />
        <div class="content">
          <pre class="text">
.content{
  width: 500px;
  max-height: 200px;
  overflow: hidden;
  outline: 1px dashed;
}
.content label{
  float: right;
  width: 100px;
  text-align: center;
  position: relative;
  left: calc(50% - 50px);
  transform: translateY(-100%);
  cursor: pointer;
}</pre
          >
          <label for="c1" class="btn"></label>
        </div>
      </div>
    </div>
    <div class="wrap">
      <h4>内容较少时</h4>
      <div class="section">
        <input class="content-check" type="checkbox" id="c2" hidden />
        <div class="content">
          <pre class="text">
        body{
          line-height: 2;
          white-space: pre-wrap;
          font-family: cursive;
        }</pre
          >
          <label for="c2" class="btn"></label>
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  mounted() {},
};
</script>

  <style scoped>

  /*  html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0 0 100px;
  display: flex;
  gap: 20px;
  justify-content: center;
  background: aliceblue;
}*/



.content {
  width: 400px;
  max-height: 200px;
  overflow: hidden;
  border-radius: 4px;
  outline: 2px dashed royalblue;
}
.section {
  display: flex;
}
pre {
  white-space: pre-wrap;
}
.content::before {
  content: "";
  width: 100px;
  height: 100%;
  float: left;
}
.btn {
  float: right;
  width: 100px;
  text-align: center;
  position: relative;
  left: calc(50% - 50px);
  transform: translateY(-100%);
  cursor: pointer;
}
.btn::after {
  content: "";
  display: block;
  height: 34px;
  background-color: #666;
  transition: 0.2s background-color;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E %3Cpath d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'%3E%3C/path%3E %3C/svg%3E")
    center/ 24px 24px no-repeat;
}
.btn:hover::after {
  background-color: royalblue;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 34px;
}
.text {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15px;
  float: right;
  line-height: 1.5;
  margin: 0;
  margin-left: -100px;
  font-size: 18px;
  color: #232323;
  -webkit-mask: linear-gradient(red 150px, transparent 200px);
}
.content-check:checked + .content {
  max-height: fit-content;
}
.content-check:checked + .content .btn {
  left: auto;
  right: calc(50% - 50px);
}
.content-check:checked + .content .btn::after {
  transform: scaleY(-1);
}
.content-check:checked + .content .text {
  -webkit-mask: none;
}
  

  </style>
    