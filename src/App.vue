<template>
  <!-- <img alt="Vue logo" src="./assets/point.png" /> -->
  <!-- <audioFfmpeg/>
  <HelloWorld msg="Hello Point" /> -->
  <!-- <DownPDFtoZip/> -->
    <UnfoldCollapse/>




</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import audioFfmpeg from './components/audioFfmpeg.vue'
import DownPDFtoZip from './components/downPDFtoZip.vue'

import skeletonLoading from './components/skeletonLoading.vue'
import GetVideo from './components/getVideo.vue'
import mintFilter from  './components/testMin.vue'

import UnfoldCollapse from './components/UnfoldCollapse.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    audioFfmpeg,
    DownPDFtoZip,
    skeletonLoading,
    GetVideo,
    mintFilter,
    UnfoldCollapse
  }
}
</script>
