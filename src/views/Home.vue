<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="map">
      <baidu-map class="bm-view" center="北京"/>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
 
// marker有两种方式进行添加 1. 自己添加div   2. 使用百度地图api

export default class Home extends Vue {}
</script>

<style>
.map {
  height: 500px;
  width: 500px;
  border: 1px solid red;
  margin: 0 auto;
}
.bm-view {
  width: 500px;
  height: 500px;
}

.marker {
  position: absolute;
  width: 50px;
  height: 50px;
  color: red;
  margin: 100px;
  
} 
</style>