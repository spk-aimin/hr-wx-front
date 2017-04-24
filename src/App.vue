h<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
*{box-sizing: border-box;}
body{color: #333}
</style>
<style lang="scss">
	@import './css/common.scss'
</style>