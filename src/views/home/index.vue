<template>
<div class="content-container">
    <el-input type="string" placeholder="Where do you want to live" v-model="input"></el-input>
    <el-tabs type="border-card">
        <el-tab-pane label="BUY">
          <h2 style="margin: 10px">Categories</h2>
            <el-row justify="center">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :span="6" v-for="(category, index) in categories" v-bind:key="index">
              <div class="grid-content">
                <router-link to="/product/2">
                  <el-card :body-style="{ padding: '0px' }" >
                    <img class="category-image" :src="category.img" alt="">
                    <div style="padding: 14px;">
                    <span>{{ category.name }}</span>
                    </div>
                  </el-card>
                </router-link>
              </div>
            </el-col>
            </el-row>
            <h2 style="margin: 10px">Nearby</h2>
                <el-row :gutter="20" type="flex">
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="RENT">
              <h2 style="margin: 10px">Categories</h2>
                <el-row :gutter="20" type="flex">
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :span="6"><div class="grid-content bg-purple"><el-card :body-style="{ padding: '0px' }" >Card</el-card></div></el-col>
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :span="6"><div class="grid-content bg-purple"><el-card :body-style="{ padding: '0px' }" >Card</el-card></div></el-col>
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :span="6"><div class="grid-content bg-purple"><el-card :body-style="{ padding: '0px' }" >Card</el-card></div></el-col>
                </el-row>
            <h2 style="margin: 10px">Nearby</h2>
              <el-row :gutter="20" type="flex">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              </el-row></el-tab-pane>
    </el-tabs>
</div>
</template>

<script>

export default {
  name: 'preview',
  data() {
    return {
      input: '',
      title: 'Home',
      categories: [
        {name: 'Commercial', img: require('@/assets/images/rent/commercial.jpg')},
        {name: 'Luxury', img: require('@/assets/images/rent/luxury.jpg')},
        {name: 'Residential', img: require('@/assets/images/rent/residential.jpg')},
        {name: 'Row House', img: require('@/assets/images/rent/row_house.jpg')},
        {name: 'Studio', img: require('@/assets/images/rent/studio.jpg')}
        ]
    }
  }
}
</script>

<style el="stylesheet/scss" lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-tab-pane {
    width: 95%;
  }

</style>

