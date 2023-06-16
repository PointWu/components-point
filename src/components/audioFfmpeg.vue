<template>
   
      <audio controls>
        <!-- MP3 文件链接 -->

        <!-- 思路：
            mpeg格式 ，用ffmpeg 去转换 
            然后生成mp3

            1、安装：
        -->

        <source src="https://cdn.acmcoder.com/client/files/1682229028099.mp3" type="audio/mpeg" id="play">
        <!-- WebM 文件链接（如果浏览器不支持 MP3） -->
        <!-- <source src="https://examacmcoder.oss-cn-beijing.aliyuncs.com/test/20190328/webm.html" type="audio/webm">
        Your browser does not support the audio element. -->
      </audio>
      
    
   
  </template>
  
  <script>
  export default {
    name: 'audioFfmpeg',
    props: {
    },
    data() {
      return {
        url:"",
       
      }
    },
    created(){
      this.url = document.getElementById('play')
      // var src = this.url.getAttribute('src');
      console.log(this.url);
    }

  }
  </script>
  