<template>
  <div class="navWrapper" >
    <div id="menu" :class="{ active: isActive }" >
      <el-menu mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item id="logo" index="/" :route="{ name: 'Root'}">
          <logo></logo>
        </el-menu-item>
        <el-menu-item index="/home" :route="{ name: 'Home' }">
          Home
        </el-menu-item>
        <el-menu-item index="/connections" :route="{ name: 'Connections' }">
          Connections
        </el-menu-item>
        <el-menu-item index="/save" :route="{ name: 'Save' }">
          Save
        </el-menu-item>
        <el-menu-item index="/notification" :route="{ name: 'Notification' }">
          Notification
        </el-menu-item>
      </el-menu>
    </div>
    <div id="toggle" @click="select()">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  },

  data() {
    return {
      activeIndex: '/home',
      isActive: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    select: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
