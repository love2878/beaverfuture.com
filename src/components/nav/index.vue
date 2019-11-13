<template>
  <div>
    <img src="../../assets/images/logo.png" class="logo" />
    <div class="nav-list">
      <span :class="currentClass === '/' ? 'current' : ''" data-value="Home" @click="navListClick('Home')">首页</span>
      <span :class="currentClass === '/product' ? 'current' : ''" data-value="Product" @click="navListClick('Product')">产品</span>
      <span :class="currentClass === '/development' ? 'current' : ''" data-value="Development" @click="navListClick('Development')">技术开发</span>
      <span :class="currentClass === '/solution' ? 'current' : ''" data-value="Solution" @click="navListClick('Solution')">整体解决方案</span>
      <span :class="currentClass === '/costcycle' ? 'current' : ''" data-value="CostCycle" @click="navListClick('CostCycle')">费用周期</span>
      <span :class="currentClass === '/cases' ? 'current' : ''" data-value="Cases" @click="navListClick('Cases')">案例展示</span>
    </div>
    <div class="m-nav-main">
      <div class="m-nav" @click="mNavClick">
        <span class="m-nav-icon"></span>
        <span class="m-nav-icon"></span>
        <span class="m-nav-icon"></span>
      </div>
      <div class="m-nav-body" :style="{display:mNavHidden }">
        <div class="m-nav-close" @click="mNavCloseClick">
          <span></span>
          <span></span>
        </div>
        <ul class="m-nav-list">
          <li>
            <span :class="currentClass === '/' ? 'current' : 'start'"></span><span @click="navListClick('Home')">首页</span>
          </li>
          <li>
            <span :class="currentClass === '/product' ? 'current' : 'start'"></span><span @click="navListClick('Product')">产品</span>
          </li>
          <li>
            <span :class="currentClass === '/development' ? 'current' : 'start'"></span><span @click="navListClick('Development')">技术开发</span>
          </li>
          <li>
            <span :class="currentClass === '/solution' ? 'current' : 'start'"></span><span @click="navListClick('Solution')">整体解决方案</span>
          </li>
          <li>
            <span :class="currentClass === '/costcycle' ? 'current' : 'start'"></span><span @click="navListClick('CostCycle')">费用周期</span>
          </li>
          <li>
            <span :class="currentClass === '/cases' ? 'current' : 'start'"></span><span @click="navListClick('Cases')">案例展示</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      mNavHidden: 'none',
      currentClass: '/'
    }
  },
  watch: {
    '$route': 'judgeHelp'
  },
  mounted() {
    // console.log('mounted::', this.$route.path )
  },
  computed: {
  },
  created() {
    // console.log('created::', this.$route.path )
  },
  methods: {
    judgeHelp() {
      this.currentClass = this.$route.path;
      // switch(this.$route.path){
      //   case '/':{
      //     break;
      //   }
      //   case '/product':{
      //     break;
      //   }
      //   case '/development':{
      //     break;
      //   }
      //   case '/solution':{
      //     break;
      //   }
      //   case '/costcycle':{
      //     break;
      //   }
      //   case '/cases':{
      //     break;
      //   }
      // }
      console.log('judgeHelp::', this.$route.path, this.currentClass);
    },
    navListClick(navName) {
      this.$router.push({ name: navName, params: { }})
      console.log(navName)
    },
    mNavClick() {
      this.mNavHidden = 'block'
    },
    mNavCloseClick() {
      this.mNavHidden = 'none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
