<template>
    <div class="camera-box" style="width: 900px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div style="text-align: center;font-size: 14px;font-weight: bold;margin-bottom: 10px;">摄像头</div>
          <!-- 这里就是摄像头显示的画面 -->
          <video id="video" width="400" height="300"></video>
          <div class="iCenter" >
            <el-button type='primary' size='small' icon="el-icon-camera" @click="takePhone" style="margin-top: 10px;">拍照</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: center;font-size: 14px;font-weight: bold;margin-bottom: 10px;">拍摄效果</div>
          <!-- 这里是点击拍照显示的图片画面 -->
          <canvas id='canvas' width='400' height='300' style="display: block;"></canvas>
          <el-button :loading="loadingbut" icon="el-icon-check" type='primary' size='small' @click="takePhoneUpfile" style="margin-top: 10px;">保存</el-button>
        </el-col>
      </el-row>
  </div>
  </template>
  <script>
    // import {putFileAttach} from "@/api/customer/animalinfo";
    export default {
      props:{
        tackPhoto:{//父组件传过来的状态
          type:Boolean,
          default:false
        }
      },
      data() {
        return {
          loadingbut:false,
          preViewVisible: false,
          blobFile: null,
          canvas: null,
          video: null,
          mediaStreamTrack: '',
        }
      },
      watch:{
        tackPhoto:{
          immediate: true,
          handler (newVal) {//监听接收到拍摄状态后，开始调取摄像头权限。如果功能是在一个组件里面，下面步骤可以直接写在自己的触发方法里面
              if (newVal) {
              var video = document.querySelector('video');
              var text = document.getElementById('text');
              // var mediaStreamTrack;
              
              // 兼容代码
              window.URL = (window.URL || window.webkitURL || window.mozURL || window.msURL);
              
              if (navigator.mediaDevices === undefined) {
              navigator.mediaDevices = {};
              }
              if (navigator.mediaDevices.getUserMedia === undefined) {
              navigator.mediaDevices.getUserMedia = function(constraints) {
                var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }
                return new Promise(function(resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
                });
              }
              } 
              
              //摄像头调用配置
              var mediaOpts = {
              audio: false,
              video: true,
              video: { facingMode: "environment"} // 或者 "user"
              // video: { width: 1280, height: 720 }
              // video: { facingMode: { exact: "environment" } }// 或者 "user"
              }
  
              let that=this;
              navigator.mediaDevices.getUserMedia(mediaOpts).then(function(stream) {
              that.mediaStreamTrack = stream;
              video = document.querySelector('video');
              if ("srcObject" in video) {
                video.srcObject = stream
              } else {
                video.src = window.URL && window.URL.createObjectURL(stream) || stream
              }
              video.play();
              }).catch(function (err) {
                console.log(err)
              });
            
                }
            },
          deep:true
        },
      },
      mounted() {
        // 摄像头
        this.video = document.getElementById('video');
        //画布
        this.canvas = document.getElementById('canvas')
        
      },
      methods: {
        takePhone() {//点击拍照截图画面
          let that = this;
          that.canvas.getContext('2d').drawImage(this.video, 0, 0, 400, 300) ;
          let dataurl = that.canvas.toDataURL('image/jpeg')
          that.blobFile = that.dataURLtoFile(dataurl, 'camera.jpg');
          that.preViewVisible = true
        },
        takePhoneUpfile() {//保存图片
          this.loadingbut=true;
          let formData = new FormData()
          formData.append('file', this.blobFile);//图片内容
          // 上传图片
          putFileAttach(formData).then(res=>{//后台接口
            this.loadingbut=false;
            this.$emit('picture',res.data.data);
            this.tackPhoto=false;
            this.canvas.getContext('2d').clearRect(0, 0, 400, 300);//清除画布
            // 关闭摄像头
            this.mediaStreamTrack.getVideoTracks().forEach(function (track) {
              track.stop();
             });
          },error=>{
            this.loadingbut=false;
            window.console.log(error);
          });
        },
      }
    }
  </script>
  <style>
   .camera-box #canvas{
    border: 1px solid #DCDFE6;
    }
  </style>
  