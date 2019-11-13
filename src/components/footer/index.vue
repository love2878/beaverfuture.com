<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-left col-12 col-sm-12 col-lg-6 clearfix">
          <div class="f-logo">
            <img src="../../assets/images/f-logo.png" />
          </div>
          <span>提交需求&nbsp;&nbsp;&rarr;</span>
          <span>联系我们&nbsp;&nbsp;&rarr;</span>
        </div>
        <div class="footer-right col-12 col-sm-12 col-lg-6">
          <span>北京汇达时代网络科技有限公司</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>©2019 海狸互动. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
  },
  computed: {
  },
  created() {
    
  },
  methods: {
    navListClick(navName) {
      this.$router.push({ name: navName, params: { }})
      console.log(navName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
